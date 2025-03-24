import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
import './styles/Navbar.css';

function Navbar() {
  
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      <ul>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About Me</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li >Resume</li>
        <li onClick={() => scrollToSection('contact')}>Contact Us</li>
        <FaUserCircle className="profile-icon" onClick={() => scrollToSection('profile')} />  
      </ul>
    </div>
  );
}

export default Navbar;
