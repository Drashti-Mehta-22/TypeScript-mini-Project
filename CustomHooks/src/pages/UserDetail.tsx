import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import type { User, UserParams } from '../types';

const UserDetail: React.FC = () => {

  const { id } = useParams() as UserParams;
  const navigate = useNavigate();

  // Reusing same useFetch hook - just different URL!
  const { data: user, loading, error } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin" />
          <p className="text-gray-400 text-lg">Loading user...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !user) {
    return (
      <div className="min-h-screen bg-linear-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">❌</p>
          <p className="text-red-400 text-lg font-semibold">User not found!</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-violet-50 via-white to-purple-50 px-6 py-12">
      
      <div className="max-w-xl mx-auto">

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-3 rounded-md bg-purple-600 text-white font-bold mb-8 hover:gap-3 transition-all"
        >
          Back
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">

          <div className="h-24 bg-linear-to-br from-violet-500 to-purple-600" />

          <div className="px-8 pb-8">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold -mt-10 mb-4 border-4 border-white shadow-md">
              {user.name.charAt(0)}
            </div>

            <h1 className="text-2xl font-extrabold text-gray-800 mb-1">
              {user.name}
            </h1>
            <p className="text-purple-500 font-semibold text-sm mb-6">
              {user.company.name}
            </p>

            {/* Info */}
            <div className="grid grid-cols-1 gap-4">

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                  <p className="text-gray-700 font-semibold">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-gray-700 font-semibold">{user.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Website</p>
                  <p className="text-purple-500 font-semibold">{user.website}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-2xl">🏢</span>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Company</p>
                  <p className="text-gray-700 font-semibold">{user.company.name}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <p className="text-center text-gray-300 text-sm">
          User ID: #{user.id}
        </p>

      </div>
    </div>
  );
};

export default UserDetail;