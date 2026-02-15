import { useState, useEffect } from "react";
import type { User, UserFormData } from "../types";

interface Props {
  onSubmit: (data: UserFormData) => void;
  editingUser: User | null;
  onCancel: () => void;
}

export default function UserForm({ onSubmit, editingUser, onCancel }: Props) {
  const [form, setForm] = useState<UserFormData>({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setForm({ name: editingUser.name, email: editingUser.email });
    } else {
      setForm({ name: "", email: "" });
    }
  }, [editingUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    onSubmit(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {editingUser ? "Edit User" : "Add New User"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <div className="flex gap-3 mt-1">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
          >
            {editingUser ? "Update User" : "Add User"}
          </button>
          {editingUser && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}