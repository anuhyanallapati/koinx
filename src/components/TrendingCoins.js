// TrendingCoins.js
import React, { useEffect, useState } from 'react';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        console.log('Trending coins data:', data); // Log the data received

        const trendingCoinsData = data.coins;

        // Fetch additional data for each trending coin
        const coinsWithDetails = await Promise.all(trendingCoinsData.map(async (coin) => {
          try {
            const priceResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.item.id}&vs_currencies=usd&include_24hr_change=true`);
            const priceData = await priceResponse.json();
            const symbolResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.item.id}`);
            const symbolData = await symbolResponse.json();
            const symbol = symbolData.symbol;
            const priceChange = priceData[coin.item.id]?.usd_24h_change || 'N/A';

            return {
              ...coin,
              symbol,
              priceChange: typeof priceChange === 'number' ? priceChange.toFixed(2) : priceChange
            };
          } catch (error) {
            console.error('Error fetching coin data:', error);
            return null;
          }
        }));

        console.log('Coins with details:', coinsWithDetails); // Log the coins with details

        setTrendingCoins(coinsWithDetails.filter(coin => coin !== null));
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="white-box">
      <h2>Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map((coin, index) => (
          <li key={index}>
            {coin.item.name} ({coin.symbol}) - {coin.priceChange}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;


// // TrendingCoins.js
// import React, { useEffect, useState } from 'react';

// const TrendingCoins = () => {
//   const [trendingCoins, setTrendingCoins] = useState([]);

//   useEffect(() => {
//     const fetchTrendingCoins = async () => {
//       try {
//         const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
//         const data = await response.json();
//         const trendingCoinsData = data.coins.slice(0, 3); // Extract top 3 trending coins
//         setTrendingCoins(trendingCoinsData);
//       } catch (error) {
//         console.error('Error fetching trending coins:', error);
//       }
//     };

//     fetchTrendingCoins();
//   }, []);

//   return (
//     <div className="white-box">
//       <h2>Trending Coins (24h)</h2>
//       <ul>
//         {trendingCoins.map((coin, index) => (
//           <li key={index}>{coin.item && coin.item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TrendingCoins;
