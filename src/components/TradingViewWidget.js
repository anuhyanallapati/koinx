// import React, { useEffect, useRef, memo, useState } from 'react';

// function TradingViewWidget() {
//   const container = useRef();
//   const [parentHeight, setParentHeight] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "symbol": "BITSTAMP:BTCUSD",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "light",
//         "style": "0",
//         "locale": "en",
//         "enable_publishing": false,
//         "allow_symbol_change": true,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }`;

//     // Clear previous script to avoid appending multiple scripts
//     container.current.innerHTML = '';

//     container.current.appendChild(script);

//     const updateParentHeight = () => {
//       const parentContainerHeight = container.current.parentElement.clientHeight;
//       setParentHeight(parentContainerHeight);
//     };

//     updateParentHeight();

//     // Listen for window resize events to update parent height
//     window.addEventListener('resize', updateParentHeight);

//     // Cleanup function to remove event listener when component unmounts
//     return () => {
//       window.removeEventListener('resize', updateParentHeight);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   const widgetHeight = parentHeight ? parentHeight - 32 : null; // Subtract any additional padding/margin

//   return (
//     <div className="tradingview-widget-container" style={{ height: widgetHeight, width: "100%" }} ref={container}>
//       <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);



// TradingViewWidget.js
import React, { useEffect, useRef, memo, useState } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const [parentHeight, setParentHeight] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "0",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

    // Clear previous script to avoid appending multiple scripts
    container.current.innerHTML = '';

    container.current.appendChild(script);

    const updateParentHeight = () => {
      const parentContainerHeight = container.current.parentElement.clientHeight;
      setParentHeight(parentContainerHeight);
    };

    updateParentHeight();

    // Listen for window resize events to update parent height
    window.addEventListener('resize', updateParentHeight);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateParentHeight);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const containerStyle = {
    height: "500px", // Adjust the height as needed
    overflow: "hidden", // Hide any content that overflows the container
  };

  const widgetStyle = {
    width: "100%",
    height: parentHeight ? `${parentHeight}px` : "100%", // Set the height dynamically
  };

  return (
    <div className="tradingview-widget-container" style={containerStyle}>
      <div className="tradingview-widget-container__widget" style={widgetStyle} ref={container}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);




// import React, { useEffect, useRef, memo, useState } from 'react';

// function TradingViewWidget() {
//   const container = useRef();
//   const [parentHeight, setParentHeight] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "symbol": "BITSTAMP:BTCUSD",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "light",
//         "style": "0",
//         "locale": "en",
//         "enable_publishing": false,
//         "allow_symbol_change": true,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }`;

//     // Clear previous script to avoid appending multiple scripts
//     container.current.innerHTML = '';

//     container.current.appendChild(script);

//     const updateParentHeight = () => {
//       const parentContainerHeight = container.current.parentElement.clientHeight;
//       setParentHeight(parentContainerHeight);
//     };

//     updateParentHeight();

//     // Listen for window resize events to update parent height
//     window.addEventListener('resize', updateParentHeight);

//     // Cleanup function to remove event listener when component unmounts
//     return () => {
//       window.removeEventListener('resize', updateParentHeight);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   const containerStyle = {
//     height: "400px", // Adjust the height as needed
//     overflow: "hidden", // Hide any content that overflows the container
//   };

//   const widgetStyle = {
//     width: "100%",
//     height: parentHeight ? `${parentHeight}px` : "100%", // Set the height dynamically
//   };

//   return (
//     <div className="tradingview-widget-container" style={containerStyle}>
//       <div className="tradingview-widget-container__widget" style={widgetStyle} ref={container}></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
