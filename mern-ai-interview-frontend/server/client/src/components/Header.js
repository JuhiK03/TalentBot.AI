import React from 'react';
import './Header.css'; // Make sure this file is created

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>UptoSkills Sinterview.ai</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <h2>Cut Hiring Time in Half: Zinterview.ai's AI-Driven Interviews</h2>
          <p>Optimize Your Hiring Process with AI-Enhanced Interviews</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHytgv53BdGV3OXHYre6a5444TsQalSQQKF5hWYpqdUoot4Q/viewform?usp=sf_link" className="btn">Schedule a Demo</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
