import React, { useState, useEffect } from 'react';

const Fundamentals = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from the API
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="fundamentals" className="white-fund-box">
      <h2>Fundamentals</h2>
      {data && (
        <div>
          <div className="fund-item">
            <p className="gray-text">Bitcoin Price:</p> <span>${data.market_data?.current_price?.usd || 'N/A'}</span>
            <div className="fund-line"></div>
            <p className="gray-text">24h Low / 24h High:</p> <span>${data.market_data?.low_24h?.usd || 'N/A'} / ${data.market_data?.high_24h?.usd || 'N/A'}</span>
            <div className="fund-line"></div>
            <p className="gray-text">7d Low / 7d High:</p> <span>${data.market_data?.low_7d?.usd || 'N/A'} / ${data.market_data?.high_7d?.usd || 'N/A'}</span>
            <div className="fund-line"></div>
            <p className="gray-text">Trading Volume:</p> <span>${data.market_data?.total_volume?.usd || 'N/A'}</span>
            <div className="fund-line"></div>
            <p className="gray-text">Market Cap Rank:</p> <span>{data.market_cap_rank}</span>
            <div className="fund-line"></div>
          </div>
          <div className="fund-item">
            <p className="gray-text">Market Cap:</p> <span>${data.market_data?.market_cap?.usd || 'N/A'}</span>
            <div className="fund-line"></div>
            <p className="gray-text">Market Cap Dominance:</p> <span>{data.market_data?.market_cap_percentage || 'N/A'}%</span>
            <div className="fund-line"></div>
            <p className="gray-text">Volume/Market Cap:</p> <span>{data.market_data?.total_volume?.usd && data.market_data?.market_cap?.usd ? 
              (data.market_data?.total_volume?.usd / data.market_data?.market_cap?.usd).toFixed(2) : 'N/A'}</span>
            <div className="fund-line"></div>
            <p className="gray-text">All-Time High:</p> <span>${data.market_data?.ath?.usd || 'N/A'}</span>
            <div className="fund-line"></div>
            <p className="gray-text">All-Time Low:</p> <span>${data.market_data?.atl?.usd || 'N/A'}</span>
            <div className="fund-line"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fundamentals;