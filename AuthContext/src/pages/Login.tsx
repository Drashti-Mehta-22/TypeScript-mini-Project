import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Login: React.FC = () => {

  const { login } = useAuth();  // Get login function from context
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleLogin = (): void => {
    if (name && email) {
      login({ name, email });  // Set user in context
    }
  }

  return (
    <div style={{
      maxWidth: '400px',
      margin: 'auto',
      padding: '40px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
    }}>

      <h2 style={{ marginBottom: '30px', color: '#333' }}>
        🔐 Login
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #e0e0e0',
          borderRadius: '6px',
          marginBottom: '15px',
          boxSizing: 'border-box',
          outline: 'none',
        }}
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #e0e0e0',
          borderRadius: '6px',
          marginBottom: '20px',
          boxSizing: 'border-box',
          outline: 'none',
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>

    </div>
  )
}

export default Login