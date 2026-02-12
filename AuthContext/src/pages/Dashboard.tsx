import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard: React.FC = () => {

  const { user, logout } = useAuth();  // Get user and logout from context

  return (
    <div style={{
      maxWidth: '500px',
      margin: 'auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
    }}>

      <h2 style={{ marginBottom: '20px', color: '#333' }}>
        👋 Welcome Dashboard!
      </h2>

      <div style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
      }}>
        <p style={{ margin: '0 0 10px 0', color: '#333', fontSize: '18px' }}>
          <strong>Name:</strong> {user?.name}
        </p>
        <p style={{ margin: '0', color: '#666', fontSize: '16px' }}>
          <strong>Email:</strong> {user?.email}
        </p>
      </div>

      <button
        onClick={logout}
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#dc3545',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>

    </div>
  );
};

export default Dashboard