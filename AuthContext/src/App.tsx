import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Separate component to use useAuth hook (useAuth must be INSIDE AuthProvider)
const AppContent: React.FC = () => {

  const { user } = useAuth();

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
    }}>

      {user ? <Dashboard /> : <Login />}

    </div>
  );
};

// Wrap everything with AuthProvider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;