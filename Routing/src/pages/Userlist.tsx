import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types';

const Userlist: React.FC = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch all users
  const fetchUsers = async (): Promise<void> => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>

      <h1 style={{
        color: '#333',
        marginBottom: '20px',
        fontSize: '32px',
      }}>
        👥 All Users
      </h1>

      <button
        onClick={fetchUsers}
        disabled={loading}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          color: 'white',
          backgroundColor: loading ? '#6c757d' : '#007bff',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '30px',
        }}
      >
        {loading ? '⏳ Loading...' : '📥 Load Users'}
      </button>

      {/* Empty State */}
      {users.length === 0 && !loading && (
        <p style={{ color: '#999', fontSize: '18px' }}>
          Click the button to load users!
        </p>
      )}

      {/* User List: when user card will be clicked it will navigate to another page */}
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => navigate(`/users/${user.id}`)}
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '15px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>
              {user.name}
            </h3>
            <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
              📧 {user.email}
            </p>
          </div>
          <span style={{ color: '#007bff', fontSize: '20px' }}>›</span>
        </div>
      ))}

    </div>
  );
};

export default Userlist;