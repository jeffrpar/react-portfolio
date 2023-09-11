import React from 'react';
import './Header.css'; // Import your CSS file for styling
import Nav from '../Nav/Nav'; // Import the Nav component

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>Your Name</h1>
        </div>
        <div className="header-right">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
