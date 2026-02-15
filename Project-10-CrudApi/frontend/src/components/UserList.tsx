import type { User } from "../types";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  if (users.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-8 text-sm">
        No users found. Add one above!
      </p>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-indigo-600">
          <tr>
            <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wide">#</th>
            <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wide">Name</th>
            <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wide">Email</th>
            <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm text-gray-500">{index + 1}</td>
              <td className="px-4 py-3 text-sm text-gray-800 font-medium">{user.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
              <td className="px-4 py-3 flex gap-2">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user._id)}
                  className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}