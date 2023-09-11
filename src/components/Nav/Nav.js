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
        <li className={`nav-item ${activeSection === 'Projects' ? 'active' : ''}`}>
          <button onClick={() => onSectionChange('Projects')}>Portfolio</button>
        </li>
        <li className={`nav-item ${activeSection === 'Contact' ? 'active' : ''}`}>
          <button onClick={() => onSectionChange('Contact')}>Contact</button>
        </li>
        <li className={`nav-item ${activeSection === 'Resume' ? 'active' : ''}`}>
          <button onClick={() => onSectionChange('Resume')}>Resume</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
