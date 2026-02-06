import React from 'react'
import type { CardProps } from '../type-index'

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        margin: '15px',
      }}
    >
      {children}
    </div>
  )
}

export default Card
