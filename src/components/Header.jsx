// components/Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <svg className="logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#4ECDC4" />
          <path d="M12,20 L28,20 M20,12 L20,28" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <h1 className="title">CANDIS</h1>
      </div>
    </header>
  );
};

export default Header;