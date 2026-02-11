import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: 'black',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '18px',
    border: '2px solid white',
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: isActive ? '#fdc168' : 'wheat',
    boxShadow: isActive? '0 2px 6px rgba(0, 0, 0, 0.22)' : '0 0 0 rgba(0, 0, 0, 0)',
    transition: '0.3s'
  });

  return (
    <nav style={{
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '15px 30px',
      display: 'flex',
      gap: '30px',
      alignItems: 'center',
    }}>

      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/users" style={linkStyle}>
        Users
      </NavLink>

    </nav>
  );
};

export default Navbar;
