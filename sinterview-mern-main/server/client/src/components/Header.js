import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <h1 className="logo">Talentbot.AI</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </nav>
        <a href="#contact" className="contact-btn">Contact Sales</a>
      </div>

      <div className="hero">
        <h2>Hire like a <span className="highlight">pro</span> with <br /><em>AI Interviewer</em></h2>
        <p>Transform your hiring process with efficient & <br />unbiased AI interviews</p>
      </div>
    </header>
  );
};

export default Header;