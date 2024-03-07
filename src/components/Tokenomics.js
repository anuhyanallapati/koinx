// export default Tokenomics;
import React from 'react';
import img from '../images/tok.png';

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="white-tok-box" style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 500, lineHeight: '26px', letterSpacing: '0em', textAlign: 'left' }}>
      <h2>Tokenomics</h2>
      <p style={{ fontWeight: 'bold' }}>Initial Distribution</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src={img} alt="Token" style={{ width: '80px', height: 'auto' }} />
        <div style={{ marginLeft: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '16px', backgroundColor: 'blue', borderRadius: '50%', marginRight: '8px' }}></div>
            <span>Crowdsale investors: 80%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '16px', backgroundColor: 'orange', borderRadius: '50%', marginRight: '8px' }}></div>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
    </div>
  );
};

export default Tokenomics;
