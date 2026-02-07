import React from 'react'
import type { ButtonProps } from '../type-index'

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '7px 14px',
        fontSize: '14px',
        backgroundColor: '#294ef6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.2s ease',  // ✨ ADDED - Smooth transition
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#0056b3';  // ✨ Darker blue on hover
        e.currentTarget.style.transform = 'scale(1.05)';    // ✨ Slightly bigger
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#007bff';  // ✨ Back to original
        e.currentTarget.style.transform = 'scale(1)';       // ✨ Back to normal size
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';    // ✨ Shrink when clicked
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
    >
      {text}
    </button>
  )
}

export default Button
