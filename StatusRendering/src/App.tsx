import React, { useState } from 'react';
import StatusBox from './components/StatusBox';
import type { Status } from './types';

const App: React.FC = () => {

  // ONE state variable, typed with union type
  const [status, setStatus] = useState<Status>('idle');

  // Simulate a fetch - goes through all states
  const simulateFetch = (): void => {
    setStatus('loading');

    setTimeout(() => {

      const isSuccess = true;
      setStatus(isSuccess ? 'success' : 'error');
    }, 2000);
  };

  const reset = (): void => {
    setStatus('idle');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>

      <h1 style={{
        marginBottom: '10px',
        color: '#333',
        fontSize: '32px',
      }}>
        Status Demo
      </h1>

      {/* Current Status Label */}
      <p style={{
        color: '#666',
        marginBottom: '30px',
        fontSize: '16px',
      }}>
        Current Status: <strong>{status}</strong>
      </p>

      <div style={{ width: '100%', maxWidth: '400px', marginBottom: '30px' }}>
        <StatusBox status={status} />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>

        {/* Fetch Button */}
        <button
          onClick={simulateFetch}
          disabled={status === 'loading'}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            backgroundColor: status === 'loading' ? '#6c757d' : '#007bff',
            border: 'none',
            borderRadius: '8px',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          {status === 'loading' ? '⏳ Loading...' : '🚀 Simulate Fetch'}
        </button>

        <button
          onClick={reset}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            backgroundColor: '#6c757d',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          🔄 Reset
        </button>

      </div>

    </div>
  );
};

export default App