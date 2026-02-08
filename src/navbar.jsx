import React from 'react';
import './css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">     
      <div className="nav-links">
        <ul className='text'>
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;