import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { User, UserParams } from '../types';

const UserDetail: React.FC = () => {

  // Typed route params - TypeScript knows id is string
  const { id } = useParams() as UserParams;
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch single user when component loads
  useEffect(() => {
    if (id){
        fetchUser();
    }
  }, [id]);

  const fetchUser = async (): Promise<void> => {
    if(!id) return

    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data: User = await response.json();
    setUser(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '80px', fontSize: '24px' }}>
        ⏳ Loading user...
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '80px', fontSize: '24px' }}>
        ❌ User not found!
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
    }}>

      <button
        onClick={() => navigate('/users')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: '600',
          color: '#007bff',
          backgroundColor: 'white',
          border: '2px solid #007bff',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '30px',
        }}
      >
        ← Back
      </button>

      {/* User Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>

        <h1 style={{
          margin: '0 0 20px 0',
          color: '#333',
          fontSize: '28px',
        }}>
          {user.name}
        </h1>

        <p style={{ margin: '10px 0', color: '#666', fontSize: '16px' }}>
          📧 {user.email}
        </p>

        <p style={{ margin: '10px 0', color: '#666', fontSize: '16px' }}>
          📞 {user.phone}
        </p>

        <p style={{ 
          margin: '15px 0 0 0',
          color: '#999',
          fontSize: '14px'
        }}>
          User ID: {user.id}
        </p>

      </div>

    </div>
  );
};

export default UserDetail;