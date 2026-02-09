import React from 'react';
import type { CatFactCardProps } from '../types';

const CatFactCard: React.FC<CatFactCardProps> = ({ catFact }) => {
  return (
    <div style={{
      backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.07)';
    e.currentTarget.style.boxShadow =
      '0 8px 20px rgba(0, 0, 0, 0.21)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow =
      '0 2px 8px rgba(0, 0, 0, 0.1)';
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '18px' }}>
        🐱 Facts
      </h3>
      <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
        {catFact.fact}
      </p>
    </div>
  );
};

export default CatFactCard;