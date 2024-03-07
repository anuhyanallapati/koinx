// import React, { useState, useEffect } from 'react';
// import './PerformanceBar.css'; // Import CSS file for styling

// const PerformanceBar = ({ bitcoinData }) => {
//   const [performance, setPerformance] = useState(null);

//   useEffect(() => {
//     if (bitcoinData) {
//       const low = bitcoinData.fiftyTwoWeekLow;
//       const high = bitcoinData.fiftyTwoWeekHigh;
//       const current = bitcoinData.currentPrice;

//       // Calculate the percentage position of the current price relative to the low and high
//       const percentage = ((current - low) / (high - low)) * 100;

//       // Set performance state
//       setPerformance({
//         percentage,
//         color: `rgb(${percentage <= 50 ? 255 : Math.floor(255 - (percentage - 50) * 5.1)}, ${percentage >= 50 ? 255 : Math.floor(percentage * 5.1)}, 0)`
//       });
//     }
//   }, [bitcoinData]);

//   return (
//     <div className="performance-bar">
//       {performance && (
//         <div className="line" style={{ width: `${performance.percentage}%`, backgroundColor: performance.color }}></div>
//       )}
//     </div>
//   );
// };

// export default PerformanceBar;
import React, { useState, useEffect } from 'react';
import './PerformanceBar.css'; // Import CSS file for styling

const PerformanceBar = ({ bitcoinData }) => {
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    if (bitcoinData) {
      const low = bitcoinData.fiftyTwoWeekLow;
      const high = bitcoinData.fiftyTwoWeekHigh;
      const current = bitcoinData.currentPrice;

      // Calculate the percentage position of the current price relative to the low and high
      const percentage = ((current - low) / (high - low)) * 100;

      // Set performance state
      setPerformance({
        percentage,
        color: percentage < 50 ? 'red' : 'green'
      });
    }
  }, [bitcoinData]);

  return (
    <div className="performance-bar">
      {performance && (
        <div className="line" style={{ width: `${performance.percentage}%`, backgroundColor: performance.color }}></div>
      )}
    </div>
  );
};

export default PerformanceBar;

// import React, { useState, useEffect } from 'react';
// import './PerformanceBar.css'; // Import CSS file for styling

// const PerformanceBar = ({ bitcoinData }) => {
//   const [performance, setPerformance] = useState(null);

//   useEffect(() => {
//     if (bitcoinData) {
//       const low = bitcoinData.fiftyTwoWeekLow;
//       const high = bitcoinData.fiftyTwoWeekHigh;
//       const current = bitcoinData.currentPrice;

//       // Calculate the percentage position of the current price relative to the low and high
//       const percentage = ((current - low) / (high - low)) * 100;

//       // Set performance state
//       setPerformance({
//         percentage,
//         color: `rgb(${Math.floor(255 - (percentage * 2.55))}, ${Math.floor(percentage * 2.55)}, 0)`
//       });
//     }
//   }, [bitcoinData]);

//   return (
//     <div className="performance-bar">
//       {performance && (
//         <div className="line" style={{ width: `${performance.percentage}%`, backgroundColor: performance.color }}></div>
//       )}
//     </div>
//   );
// };

// export default PerformanceBar;
