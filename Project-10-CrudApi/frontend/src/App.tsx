import { useState, useEffect } from "react";
import type { User, UserFormData } from "./types";
import { fetchUsers, createUser, updateUser, deleteUser } from "./controller/UserApi";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers]             = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState<string | null>(null);

  useEffect(() => { loadUsers(); }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch {
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: UserFormData) => {
    try {
      if (editingUser) {
        const updated = await updateUser(editingUser._id, data);
        setUsers(users.map((u) => (u._id === updated._id ? updated : u)));
        setEditingUser(null);
      } else {
        const created = await createUser(data);
        setUsers([created, ...users]);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Operation failed.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u._id !== id));
    } catch {
      setError("Failed to delete user.");
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50 px-4 py-10 font-sans">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <span className="bg-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
            {users.length} Users
          </span>
        </header>

        {/* Error Banner */}
        {error && (
          <div className="flex items-center justify-between bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
            <span>⚠️ {error}</span>
            <button
              onClick={() => setError(null)}
              className="bg-transparent border-none text-red-400 hover:text-red-600 cursor-pointer text-base font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Form */}
        <UserForm
          onSubmit={handleSubmit}
          editingUser={editingUser}
          onCancel={() => setEditingUser(null)}
        />

        {/* List */}
        {loading ? (
          <p className="text-center text-gray-400 text-sm mt-10">Loading...</p>
        ) : (
          <UserList
            users={users}
            onEdit={setEditingUser}
            onDelete={handleDelete}
          />
        )}

      </div>
    </div>
  );
}