// // TradingViewWidget.js
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

//     container.current.innerHTML = '';

//     container.current.appendChild(script);

//     const updateParentHeight = () => {
//       const parentContainerHeight = container.current.parentElement.clientHeight;
//       setParentHeight(parentContainerHeight);
//     };

//     updateParentHeight();

//     window.addEventListener('resize', updateParentHeight);

//     return () => {
//       window.removeEventListener('resize', updateParentHeight);
//     };
//   }, []);

//   const containerStyle = {
//     height: "500px",
//     overflow: "hidden",
//   };

//   const widgetStyle = {
//     width: "100%",
//     height: parentHeight ? `${parentHeight}px` : "100%",
//   };

//   return (
//     <div className="tradingview-widget-container" style={containerStyle}>
//       <div className="tradingview-widget-container__widget" style={widgetStyle} ref={container}></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);

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

    container.current.innerHTML = '';

    container.current.appendChild(script);

    const updateParentHeight = () => {
      const parentContainerHeight = container.current.parentElement.clientHeight;
      setParentHeight(parentContainerHeight);
    };

    updateParentHeight();

    window.addEventListener('resize', updateParentHeight);

    return () => {
      window.removeEventListener('resize', updateParentHeight);
    };
  }, []);

  const containerStyle = {
    height: "500px",
    overflow: "hidden",
  };

  const widgetStyle = {
    width: "100%",
    height: parentHeight ? `${parentHeight}px` : "100%",
  };

  return (
    <div className="tradingview-widget-container" style={containerStyle}>
      <div className="tradingview-widget-container__widget" style={widgetStyle} ref={container}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
