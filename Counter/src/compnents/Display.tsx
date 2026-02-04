import React from 'react'
import type { DisplayProps } from '../types-blueprint'

const Display: React.FC<DisplayProps> = ({value}) => {
  return (
    <div
    style={{
      fontSize: '72px',
      fontWeight: 'bold',
      margin: '40px auto',
      padding: '30px 50px',
      color: '#667eea',
      backgroundColor: '#f8f9fa',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(17, 37, 95, 0.26)',
      display: 'inline-block',
    }}
    >
      {value}
    </div>
  )
}

export default Display