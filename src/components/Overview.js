// // Overview.js
// import React from 'react';

// const Overview = () => {
//   return (
//     <div id="overview" className="white-box">
//       <h2>Overview</h2>
//       <p>This is the Overview section.</p>
//     </div>
//   );
// };

// export default Overview;





import React, { useState, useEffect } from 'react';
import PerformanceBar from './PerformanceBar'; // Import PerformanceBar component

const Overview = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Bitcoin data
      const bitcoinResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
      const bitcoinData = await bitcoinResponse.json();

      // Fetch historical market data for Bitcoin for the last 52 weeks
      const currentDate = new Date();
      const endTimestamp = Math.floor(currentDate.getTime() / 1000); // Current timestamp in seconds
      const startTimestamp = endTimestamp - (52 * 7 * 24 * 60 * 60); // 52 weeks ago in seconds

      const historicalResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${startTimestamp}&to=${endTimestamp}`);
      const historicalData = await historicalResponse.json();

      // Extract 52-week low and high prices
      let fiftyTwoWeekLow = Infinity;
      let fiftyTwoWeekHigh = 0;

      historicalData.prices.forEach(([timestamp, price]) => {
        if (price < fiftyTwoWeekLow) {
          fiftyTwoWeekLow = price;
        }
        if (price > fiftyTwoWeekHigh) {
          fiftyTwoWeekHigh = price;
        }
      });

      // Fetch today's low and high prices
      const todayStartTimestamp = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime() / 1000; // Midnight timestamp in seconds
      const todayEndTimestamp = Math.floor(currentDate.getTime() / 1000); // Current timestamp in seconds

      const todayResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${todayStartTimestamp}&to=${todayEndTimestamp}`);
      const todayData = await todayResponse.json();

      let todayLow = Infinity;
      let todayHigh = 0;

      todayData.prices.forEach(([timestamp, price]) => {
        if (price < todayLow) {
          todayLow = price;
        }
        if (price > todayHigh) {
          todayHigh = price;
        }
      });

      // Set Bitcoin data state
      setBitcoinData({
        currentPrice: bitcoinData.market_data.current_price.usd,
        todayLow,
        todayHigh,
        fiftyTwoWeekLow,
        fiftyTwoWeekHigh
      });
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div id="overview" className="white-perf-box">
      <h2>Overview</h2>
      {bitcoinData && (
        <>
          <p>Current Price: ${bitcoinData.currentPrice}</p>
          <p>Today's Low: ${bitcoinData.todayLow}</p>
          <p>Today's High: ${bitcoinData.todayHigh}</p>
          <p>52-week Low: ${bitcoinData.fiftyTwoWeekLow}</p>
          <p>52-week High: ${bitcoinData.fiftyTwoWeekHigh}</p>
          {/* Render PerformanceBar component */}
          <PerformanceBar bitcoinData={bitcoinData} />
        </>
      )}
    </div>
  );
};

export default Overview;



// import React, { useState, useEffect } from 'react';

// const Overview = () => {
//   const [bitcoinData, setBitcoinData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Step 1: Get current data for Bitcoin
//       const bitcoinResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
//       const bitcoinData = await bitcoinResponse.json();

//       // Step 2: Get historical market data for Bitcoin for the last 52 weeks
//       const currentDate = new Date();
//       const endTimestamp = Math.floor(currentDate.getTime() / 1000); // Current timestamp in seconds
//       const startTimestamp = endTimestamp - (52 * 7 * 24 * 60 * 60); // 52 weeks ago in seconds

//       const historicalResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${startTimestamp}&to=${endTimestamp}`);
//       const historicalData = await historicalResponse.json();

//       // Extract 52-week low and high prices
//       let fiftyTwoWeekLow = Infinity;
//       let fiftyTwoWeekHigh = 0;

//       historicalData.prices.forEach(([timestamp, price]) => {
//         if (price < fiftyTwoWeekLow) {
//           fiftyTwoWeekLow = price;
//         }
//         if (price > fiftyTwoWeekHigh) {
//           fiftyTwoWeekHigh = price;
//         }
//       });

//       // Step 3: Get today's low and high prices
//       const todayStartTimestamp = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime() / 1000; // Midnight timestamp in seconds
//       const todayEndTimestamp = Math.floor(currentDate.getTime() / 1000); // Current timestamp in seconds

//       const todayResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${todayStartTimestamp}&to=${todayEndTimestamp}`);
//       const todayData = await todayResponse.json();

//       let todayLow = Infinity;
//       let todayHigh = 0;

//       todayData.prices.forEach(([timestamp, price]) => {
//         if (price < todayLow) {
//           todayLow = price;
//         }
//         if (price > todayHigh) {
//           todayHigh = price;
//         }
//       });

//       // Set Bitcoin data state
//       setBitcoinData({
//         currentPrice: bitcoinData.market_data.current_price.usd,
//         todayLow,
//         todayHigh,
//         fiftyTwoWeekLow,
//         fiftyTwoWeekHigh
//       });
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div id="overview" className="white-box">
//       <h2>Overview</h2>
//       {bitcoinData && (
//         <>
//           <p>Current Price: ${bitcoinData.currentPrice}</p>
//           <p>Today's Low: ${bitcoinData.todayLow}</p>
//           <p>Today's High: ${bitcoinData.todayHigh}</p>
//           <p>52-week Low: ${bitcoinData.fiftyTwoWeekLow}</p>
//           <p>52-week High: ${bitcoinData.fiftyTwoWeekHigh}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Overview;
