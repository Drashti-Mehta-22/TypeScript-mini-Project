import React from 'react';
import type { User } from '../types';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const navigate = useNavigate()

  return (
    <div
    onClick={() => navigate(`/users/${user.id}`)}
     className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">

      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
          {user.name.charAt(0)}  {/* First letter of name */}
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg leading-tight">
            {user.name}
          </h3>
          <p className="text-purple-500 text-sm font-medium">
            {user.company.name}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 my-4" />

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>📧</span>
          <span className="truncate">{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>📞</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>🌐</span>
          <span className="text-purple-400">{user.website}</span>
        </div>
      </div>

    </div>
  );
};

export default UserCard;