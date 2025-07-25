# 🏦 Microfinance Management Information System (MIS)

A comprehensive full-stack MERN application for managing microfinance operations, including member management, loan processing, savings tracking, and real-time notifications.

## 🚀 Live Demo

- **Frontend**: [https://microfinance-mis.vercel.app](https://microfinance-mis.vercel.app)
- **Backend API**: [https://microfinance-mis.onrender.com](https://microfinance-mis.onrender.com)
- **API Documentation**: [https://microfinance-mis.onrender.com/api-docs](https://microfinance-mis.onrender.com/api-docs)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin, Officer, Leader)
- Secure password hashing with bcrypt
- Password reset functionality

### 👥 Member Management
- Complete member registration and profiles
- Group-based member organization
- Member status tracking (Active, Inactive, Suspended)
- Bulk member operations

### 💰 Loan Management
- Loan application and approval workflow
- Multiple loan types and terms
- Repayment scheduling and tracking
- Interest calculation and late fee management
- Guarantor system

### 💳 Savings & Transactions
- Individual and group savings accounts
- Transaction history and reporting
- Interest calculation on savings
- Withdrawal and deposit management

### 📊 Reporting & Analytics
- Real-time dashboard with key metrics
- Comprehensive financial reports
- Export functionality (PDF, Excel)
- Data visualization with charts

### 🔔 Real-time Features
- Live notifications using Socket.io
- Real-time chat system
- Live updates for transactions and status changes

### 📱 Responsive Design
- Mobile-first responsive design
- Progressive Web App (PWA) features
- Cross-browser compatibility

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Radix UI** - Accessible component primitives
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Socket.io Client** - Real-time communication
- **Recharts** - Data visualization
- **Vitest** - Testing framework

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Socket.io** - Real-time communication
- **Nodemailer** - Email functionality
- **Jest** - Testing framework
- **Supertest** - API testing

### DevOps & Tools
- **GitHub Actions** - CI/CD pipelines
- **Vercel** - Frontend deployment
- **Render** - Backend deployment
- **MongoDB Atlas** - Cloud database
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Playwright** - E2E testing

## 🏗️ Architecture

```
microfinance-mis/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service layer
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── tests/         # Frontend tests
│   └── public/            # Static assets
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Utility functions
│   └── tests/            # Backend tests
└── .github/              # GitHub Actions workflows
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/microfinance-mis.git
   cd microfinance-mis
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   pnpm install
   
   # Install frontend dependencies
   cd ../client
   pnpm install
   ```

3. **Environment Setup**
   
   Create `.env` file in the server directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/microfinance-mis
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=30d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CLIENT_URL=http://localhost:5173
   ```

   Create `.env` file in the client directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development servers**
   ```bash
   # Start backend (from server directory)
   pnpm run dev
   
   # Start frontend (from client directory)
   pnpm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🧪 Testing

### Backend Testing
```bash
cd server
pnpm test              # Run all tests
pnpm run test:watch    # Run tests in watch mode
pnpm run test:ci       # Run tests for CI
```

### Frontend Testing
```bash
cd client
pnpm test              # Run all tests
pnpm run test:watch    # Run tests in watch mode
pnpm run test:ui       # Run tests with UI
```

### E2E Testing
```bash
npm run test:e2e      # Run Playwright E2E tests
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Configure build command: `npm install && npm run build`
4. Configure start command: `npm start`

### Environment Variables for Production

**Backend (Render)**
```env
NODE_ENV=production
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-production-jwt-secret
JWT_EXPIRE=30d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=https://microfinance-mis.vercel.app
```

**Frontend (Vercel)**
```env
VITE_API_URL=https://microfinance-mis.onrender.com
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Forgot password
- `POST /api/auth/reset-password` - Reset password

### User Management
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Member Management
- `GET /api/members` - Get all members
- `POST /api/members` - Create member
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

### Loan Management
- `GET /api/loans` - Get all loans
- `POST /api/loans` - Create loan
- `PUT /api/loans/:id` - Update loan
- `DELETE /api/loans/:id` - Delete loan

### Savings & Transactions
- `GET /api/savings` - Get savings accounts
- `POST /api/savings` - Create savings account
- `GET /api/transactions` - Get transactions
- `POST /api/transactions` - Create transaction

For complete API documentation, visit: [https://microfinance-mis.onrender.com/api-docs](https://microfinance-mis.onrender.com/api-docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Frontend hosting
- [Render](https://render.com/) - Backend hosting

## 📞 Support

For support, email support@microfinance-mis.com or create an issue in the GitHub repository.

---

**Built with ❤️ for the microfinance community**
