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
      }}
    >
      {text}
    </button>
  )
}

export default Button
