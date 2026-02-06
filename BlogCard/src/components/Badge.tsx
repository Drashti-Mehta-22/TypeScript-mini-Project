import React from 'react'
import type { BadgeProps } from '../type-index';

const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  
  const getColor = (): string => {
    if (color === 'red') return '#dc3545';
    if (color === 'green') return '#28a745';
    if (color === 'yellow') return '#ffc107';
    return '#007bff';  // blue
  };

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        fontSize: '12px',
        fontWeight: '600',
        color: 'white',
        backgroundColor: getColor(),
        borderRadius: '12px',
      }}
    >
      {text}
    </span>
  )
}

export default Badge
