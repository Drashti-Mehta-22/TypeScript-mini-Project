import React from 'react';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px',
    }}>
      <LoginForm />
    </div>
  );
};

export default App