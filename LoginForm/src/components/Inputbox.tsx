import React from 'react'
import type { InputProps } from '../Types'

const Inputbox: React.FC<InputProps> = ({type, name, value, onChange, error, label }) => {
  return (
    <div style={{ marginBottom: '20px' }}>

    <label style={{
        fontWeight: '600',
        color: '#333',
        fontSize: '14px',
      }}>
        {label}
    </label>

    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          marginTop:'10px',
          border: error ? '2px solid #dc3545' : '2px solid #e0e0e0',  // error
          borderRadius: '6px',
          outline: 'none',
          transition: 'border 0.3s ease',
        }}
        onFocus={(e) => {
          if (!error) {
            e.currentTarget.style.border = '2px solid #007bff';
          }
        }}
        onBlur={(e) => {
          if (!error) {
            e.currentTarget.style.border = '2px solid #e0e0e0';
          }
        }}
      />

      {/* Error Message */}
      {error && (
        <p style={{
          color: '#dc3545',
          fontSize: '14px',
          marginTop: '5px',
          marginBottom: '0',
        }}>
          ❌ {error}
        </p>
      )}
      
    </div>
  )
}

export default Inputbox
