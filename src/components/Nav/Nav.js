import React from 'react';
import './Nav.css'; // Import your CSS file for styling

function Nav(props) {
  const { activeSection, onSectionChange } = props;

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className={`nav-item ${activeSection === 'About' ? 'active' : ''}`}>
          <button onClick={() => onSectionChange('About')}>About Me</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
