import React from 'react'
import type { BadgeProps } from '../type-index';

const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  
  const getColor = (): string => {
    if (color === 'red') return '#fe3f52';
    if (color === 'green') return '#28a745'
    if (color === 'yellow') return '#ffc107'
    if (color === 'gray') return '#6c757d'
    return '#007bff'; 
  };

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        fontSize: '14px',
        fontWeight: '600',
        color: 'black',
        backgroundColor: 'white',
        border: `2px solid ${getColor()}`,
        borderRadius: '12px',
        marginRight: '8px'
      }}
    >
      {text}
    </span>
  )
}

export default Badge
