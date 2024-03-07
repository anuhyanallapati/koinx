

// App.js
import React, { useRef } from 'react';
import './styles.css';
import Whitebox from './components/Whitebox';
import NavigationBar from './components/NavigationBar'; // Import the original navigation bar
import Bluebox from './components/Bluebox';
import NewNavigationBar from './components/NewNavigationBar';
import Overview from './components/Overview';
import Fundamentals from './components/Fundamentals';
import NewsInsights from './components/NewsInsights';
import Sentiments from './components/Sentiments';
import Team from './components/Team';
import Technicals from './components/Technicals';
import Tokenomics from './components/Tokenomics';

const App = () => {
  const overviewRef = useRef(null);
  const fundamentalsRef = useRef(null);
  const newsInsightsRef = useRef(null);
  const sentimentsRef = useRef(null);
  const teamRef = useRef(null);
  const technicalsRef = useRef(null);
  const tokenomicsRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'overview':
        overviewRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'fundamentals':
        fundamentalsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'news-insights':
        newsInsightsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'sentiments':
        sentimentsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'team':
        teamRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'technicals':
        technicalsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'tokenomics':
        tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="app">
      <NavigationBar />
      <div className="container">
        <Whitebox />
        <Bluebox />
      </div>
      {/* New navigation bar */}
      <NewNavigationBar scrollToSection={scrollToSection} />
      {/* Section components */}
      <div ref={overviewRef}>
        <Overview />
      </div>
      <div ref={fundamentalsRef}>
        <Fundamentals />
      </div>
      {/* <div ref={newsInsightsRef}>
        <NewsInsights />
      </div>
      <div ref={sentimentsRef}>
        <Sentiments />
      </div> */}
      <div ref={teamRef}>
        <Tokenomics />
      </div>
      {/* <div ref={technicalsRef}>
        <Technicals />
      </div> */}
      <div ref={tokenomicsRef}>
        <Team />
      </div>
    </div>
  );
};

export default App;
