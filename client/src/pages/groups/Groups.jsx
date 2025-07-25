import { useEffect, useState } from "react";
import { groupService } from "../../services/groupService";
import GroupForm from "../../components/custom/GroupForm";

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [editingGroup, setEditingGroup] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchGroups = () => {
    setLoading(true);
    groupService
      .getAll()
      .then((data) => setGroups(data.groups || data || []))
      .catch((err) =>
        setError(err.response?.data?.message || "Failed to load groups")
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleCreate = async (form) => {
    setFormLoading(true);
    try {
      await groupService.create(form);
      setModalOpen(false);
      fetchGroups();
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to create group");
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = async (form) => {
    setFormLoading(true);
    try {
      await groupService.update(editingGroup.id || editingGroup._id, form);
      setModalOpen(false);
      setEditingGroup(null);
      fetchGroups();
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to update group");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this group?")) return;
    setDeletingId(id);
    try {
      await groupService.remove(id);
      fetchGroups();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete group");
    } finally {
      setDeletingId(null);
    }
  };

  const openCreateModal = () => {
    setEditingGroup(null);
    setModalOpen(true);
  };

  const openEditModal = (group) => {
    setEditingGroup(group);
    setModalOpen(true);
  };

  if (loading) return <div>Loading groups...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Groups</h1>
        <button
          className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold hover:bg-primary/90 transition"
          onClick={openCreateModal}
        >
          New Group
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Description</th>
              <th className="px-4 py-2 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="text-center py-4 text-muted-foreground"
                >
                  No groups found.
                </td>
              </tr>
            ) : (
              groups.map((g) => (
                <tr key={g.id || g._id} className="border-b">
                  <td className="px-4 py-2">{g.name || "-"}</td>
                  <td className="px-4 py-2">{g.description || "-"}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-primary underline mr-2"
                      onClick={() => openEditModal(g)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-destructive underline"
                      onClick={() => handleDelete(g.id || g._id)}
                      disabled={deletingId === (g.id || g._id)}
                    >
                      {deletingId === (g.id || g._id)
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Modal for New/Edit Group */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-card rounded shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              onClick={() => {
                setModalOpen(false);
                setEditingGroup(null);
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {editingGroup ? "Edit Group" : "New Group"}
            </h2>
            <GroupForm
              initialValues={editingGroup || {}}
              onSubmit={editingGroup ? handleEdit : handleCreate}
              onCancel={() => {
                setModalOpen(false);
                setEditingGroup(null);
              }}
              loading={formLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
}
