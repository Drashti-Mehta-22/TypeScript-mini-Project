import React from 'react';
import type { Status } from '../types';

interface StatusBoxProps {
  status: Status;
}

const StatusBox: React.FC<StatusBoxProps> = ({ status }) => {

  if (status === 'idle') {
    return (
      <div style={{
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        fontSize: '20px',
        color: '#666',
      }}>
        😴 Idle - Click a button to start!
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <div style={{
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#fff3cd',
        textAlign: 'center',
        fontSize: '20px',
        color: '#856404',
      }}>
        ⏳ Loading... Please wait!
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div style={{
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#d4edda',
        textAlign: 'center',
        fontSize: '20px',
        color: '#155724',
      }}>
        ✅ Success! Data loaded!
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div style={{
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#f8d7da',
        textAlign: 'center',
        fontSize: '20px',
        color: '#721c24',
      }}>
        ❌ Error! Something went wrong!
      </div>
    );
  }
};

export default StatusBox;