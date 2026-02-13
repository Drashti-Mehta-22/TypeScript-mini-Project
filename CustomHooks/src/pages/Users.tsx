import React from 'react';
import useFetch from '../hooks/useFetch';
import UserCard from '../components/UserCard';
import type { User } from '../types';

const Users: React.FC = () => {

  // One line replaces all fetch logic!
  const { data: users, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-violet-50 via-white to-purple-50">
    
      <div className="text-center py-16 px-4">

        <div className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Custom Hook + TypeScript
        </div>

        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Users{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-br from-violet-500 to-purple-600">
            Directory
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-md mx-auto">
          Fetched using a generic{' '}
          <span className="text-purple-500 font-semibold">useFetch&lt;T&gt;</span>{' '}
          custom hook
        </p>

      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin" />
            <p className="text-gray-400 text-lg">Fetching users...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <p className="text-4xl mb-3">❌</p>
            <p className="text-red-500 font-semibold text-lg">{error}</p>
          </div>
        )}

        {/* Users Grid */}
        {users && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}

      </div>

      {users && (
        <div className="text-center pb-10 text-gray-300 text-sm">
          {users.length} users loaded via useFetch hook
        </div>
      )}

    </div>
  );
};

export default Users;