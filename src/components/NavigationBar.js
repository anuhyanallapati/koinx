// NavigationBar.js
import React from 'react';
import logoImage from '../images/logo.png'; // Adjust the path as needed

const NavigationBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Koinx Logo" />
        </div>
        <div className="nav-buttons">
          <button>Crypto Taxes</button>
          <button>Free Tools</button>
          <button>Resource Center</button>
          <div className="gap"></div>
          <span className="blue-button">
            <button className="get-started-button">Get Started</button>
          </span>
        </div>
      </div>
      <div className="selected-cryptocurrency">
        <span className="gray-text">Cryptocurrencies &gt;&gt; </span>
        <span className="black-text">Bitcoin</span> {/* Directly write the selected cryptocurrency */}
      </div>
    </div>
  );
};

export default NavigationBar;