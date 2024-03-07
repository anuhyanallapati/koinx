// Bluebox.js
import React from 'react';
import imageSrc from '../images/bluepic.png';

class Bluebox extends React.Component {
  render() {
    return (
      <div className="blue-box">
        <h2>Get Started with KoinX for FREE</h2>
        <p>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <img src={imageSrc} alt="Description of the image" style={{ display: 'block', margin: '0 auto', width: '50%' }} />
        <p>Get Started for FREE</p>
      </div>
    );
  }
}

export default Bluebox;
