import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fetchProfile } from '../api/authApi';

interface Profile {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data.user as Profile);
      } catch {
        logout();
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500 text-lg">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Logout
          </button>
        </div>

        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-600">
                {profile?.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome, {profile?.name}!
              </h2>
              <p className="text-gray-500 text-sm">You are successfully authenticated</p>
            </div>
          </div>
        </div>

        {/* Profile Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Profile Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Name</span>
              <span className="text-gray-800 font-medium">{profile?.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Email</span>
              <span className="text-gray-800 font-medium">{profile?.email}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">User ID</span>
              <span className="text-gray-500 text-xs font-mono">{profile?._id}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500 text-sm">Member Since</span>
              <span className="text-gray-800 font-medium">
                {profile?.createdAt
                  ? new Date(profile.createdAt).toLocaleDateString()
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* JWT Info */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 mt-4">
          <p className="text-indigo-700 text-sm font-medium">🔒 Protected Route</p>
          <p className="text-indigo-600 text-xs mt-1">
            This page fetched the profile from a JWT-protected API endpoint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;