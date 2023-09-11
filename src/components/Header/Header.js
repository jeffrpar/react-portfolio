import React from 'react';
import './Header.css'; // Import your CSS file for styling
import Nav from '../Nav/Nav'; // Import the Nav component

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Jeff Parker</h1>
        {/* Render the Nav component */}
        <Nav />
      </div>
    </header>
  );
}

export default Header;
