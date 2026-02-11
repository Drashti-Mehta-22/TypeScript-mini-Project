import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  // useNavigate - programmatically navigate to a page
  const navigate = useNavigate();

  return (
    <div style={{
      textAlign: 'center',
      padding: '80px 20px',
    }}>
      <h1 style={{
        fontSize: '42px',
        color: '#333',
        marginBottom: '20px',
      }}>
        Welcome Home! 🏠
      </h1>

      <p style={{
        fontSize: '18px',
        color: '#666',
        marginBottom: '30px',
      }}>
        Click below to see all users
      </p>

      <button
        onClick={() => navigate('/users')}
        style={{
          padding: '15px 40px',
          fontSize: '18px',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        👥 View Users
      </button>
    </div>
  );
};

export default Home;