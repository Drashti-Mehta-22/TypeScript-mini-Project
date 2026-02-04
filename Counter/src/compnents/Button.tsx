import React from 'react'
import type { ButtonProps } from '../types-blueprint'

const Button: React.FC<ButtonProps> = ({text, onclick}) => {
  return (
    <button
    onClick={onclick}
    style={{
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: '500',
        margin: '8px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#717ade',
        color: 'white',
        boxShadow: '0 2px 8px rgba(19, 19, 87, 0.55)',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#485cce';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#667eea';
      }}
    >
        {text}
    </button>
  )
}

export default Button
