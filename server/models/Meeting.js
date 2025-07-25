const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
  {
    // Group association
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: [true, "Group reference is required"],
    },

    // Meeting details
    date: {
      type: Date,
      required: [true, "Meeting date is required"],
      validate: {
        validator: function (v) {
          return v >= new Date();
        },
        message: "Meeting date must be in the future",
      },
    },
    location: {
      type: String,
      trim: true,
      maxlength: [100, "Location cannot exceed 100 characters"],
    },
    agenda: {
      type: String,
      trim: true,
      maxlength: [500, "Agenda cannot exceed 500 characters"],
    },

    // Participants and outcomes
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    resolutions: {
      type: String,
      trim: true,
      maxlength: [1000, "Resolutions cannot exceed 1000 characters"],
    },

    // Loans discussed (if any)
    loansDiscussed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Loan" }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for attendance count
meetingSchema.virtual("attendanceCount").get(function () {
  return this.attendance.length;
});

// Method to mark attendance safely (avoids ObjectId mismatch)
meetingSchema.methods.markAttendance = function (userId) {
  const idStr = userId.toString();
  if (!this.attendance.some((id) => id.toString() === idStr)) {
    this.attendance.push(userId);
  }
  return this.save();
};

module.exports = mongoose.model("Meeting", meetingSchema);
