import React from 'react';
import TradingViewWidget from './TradingViewWidget';
import imageSrc from '../images/b.png'; // Import your image

class Whitebox extends React.Component {
  state = {
    bitcoinPriceUSD: null,
    bitcoinPriceINR: null,
    bitcoinChangeUSD: null,
    bitcoinChangeINR: null,
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true&precision=2')
      .then(response => response.json())
      .then(data => {
        const { bitcoin } = data;
        this.setState({
          bitcoinPriceUSD: bitcoin.usd.toLocaleString(),
          bitcoinPriceINR: bitcoin.inr.toLocaleString(),
          bitcoinChangeUSD: bitcoin.usd_24h_change.toFixed(2),
          bitcoinChangeINR: bitcoin.inr_24h_change,
          isLoading: false,
          error: null,
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error: 'Error fetching Bitcoin price.',
        });
      });
  }

  render() {
    console.log('Whitebox component is rendering.'); // Add this console log
    const { bitcoinPriceUSD, bitcoinPriceINR, bitcoinChangeUSD, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    const boxColor = bitcoinChangeUSD > 0 ? '#8bc34a' : '#f44336';

    return (
      <div className="whitegraph-box">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}> {/* Adjusted marginBottom */}
          <img src={imageSrc} alt="Bitcoin" style={{ width: '50px', marginBottom: '0px', marginRight: '10px' }} />
          <h2 style={{ marginBottom: '5px', marginTop: '0', marginRight: '5px' }}>Bitcoin </h2>
          <div style={{ color: 'gray', fontSize: '12px', marginRight: '20px' }}>BTC</div> {/* Adjusted size and added more margin */}
          <div style={{ backgroundColor: 'gray', padding: '5px', borderRadius: '5px', color: 'white' }}>
            Rank #1
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '0px', marginRight: '40px', marginTop: '20px' }}>${bitcoinPriceUSD}</p>
          <div style={{ backgroundColor: boxColor, color: 'white', padding: '5px', borderRadius: '5px' }}>
            {bitcoinChangeUSD}%
          </div>
          <span style={{ marginLeft: '10px', color: 'gray' }}>(24H)</span>
        </div>
        <p style={{ fontSize: '15px', marginTop: '0', marginBottom: '10px' }}>₹ {bitcoinPriceINR}</p>
        <TradingViewWidget /> {/* Render TradingViewWidget component */}
      </div>
    );
  }
}

export default Whitebox;