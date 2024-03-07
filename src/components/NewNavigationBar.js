import React from 'react';

const NewNavigationBar = ({ scrollToSection }) => {
  return (
    <div className="new-navbar">
      <div className="nav-buttons">
        <button onClick={() => scrollToSection("overview")}>Overview</button>
        <button onClick={() => scrollToSection("fundamentals")}>Fundamentals</button>
        <button onClick={() => scrollToSection("newsinsights")}>News Insights</button>
        <button onClick={() => scrollToSection("sentiments")}>Sentiments</button>
        <button onClick={() => scrollToSection("team")}>Team</button>
        <button onClick={() => scrollToSection("technicals")}>Technicals</button>
        <button onClick={() => scrollToSection("tokenomics")}>Tokenomics</button>
      </div>
    </div>
  );
};

export default NewNavigationBar;
