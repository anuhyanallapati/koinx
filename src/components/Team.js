import React from 'react';
import emp1 from '../images/emp1.png';
import emp2 from '../images/emp2.png';
import emp3 from '../images/emp3.png';

const Team = () => {
  return (
    <div id="team" className="white-team-box" style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: 500, lineHeight: '26px', letterSpacing: '0em', textAlign: 'left' }}>
      <h2 style={{ color: 'black', fontWeight: 'bold' }}>Team</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

      <div className="team-member" style={{ backgroundColor: '#E8F4FD', padding: '20px', margin: '10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start' }}>
        <div>
          <img src={emp1} alt="Employee 1" style={{ width: '100px', height: 'auto' }} />
          <div className="info">
            <span style={{ color: 'black', fontWeight: 'bold' }}>John Smith</span><br />
            <span style={{ color: 'gray' }}>Designation here</span>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.</p>
        </div>
      </div>

      <div className="team-member" style={{ backgroundColor: '#E8F4FD', padding: '20px', margin: '10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start' }}>
        <div>
          <img src={emp2} alt="Employee 2" style={{ width: '100px', height: 'auto' }} />
          <div className="info">
            <span style={{ color: 'black', fontWeight: 'bold' }}>Elina Williams</span><br />
            <span style={{ color: 'gray' }}>Designation here</span>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare nets sagittis in nunc convallis mattis maecenas. Tempus arc leo socis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.</p>
        </div>
      </div>

      <div className="team-member" style={{ backgroundColor: '#E8F4FD', padding: '20px', margin: '10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start' }}>
        <div>
          <img src={emp3} alt="Employee 3" style={{ width: '100px', height: 'auto' }} />
          <div className="info">
            <span style={{ color: 'black', fontWeight: 'bold' }}>John Smith</span><br />
            <span style={{ color: 'gray' }}>Designation here</span>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.</p>
        </div>
      </div>
    </div>
  );
};

export default Team;

// import React from 'react';
// import emp1 from '../emp1.png';
// import emp2 from '../emp2.png';
// import emp3 from '../emp3.png';

// const Team = () => {
//   return (
//     <div id="team" className="white-team-box">
//       <h2 style={{ color: 'black', fontWeight: 'bold' }}>Team</h2>
//       <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

//       <div className="team-member" style={{ backgroundColor: '#E8F4FD', padding: '20px', margin: '10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start' }}>
//         <div>
//           <img src={emp1} alt="Employee 1" style={{ width: '100px', height: 'auto' }} />
//           <div className="info">
//             <span style={{ color: 'black', fontWeight: 'bold' }}>John Smith</span><br />
//             <span style={{ color: 'gray' }}>Designation here</span>
//           </div>
//         </div>
//         <div style={{ marginLeft: '20px' }}>
//           <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.</p>
//         </div>
//       </div>

//       <div className="team-member" style={{ backgroundColor: '#E8F4FD', padding: '20px', margin: '10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start' }}>
//         <div>
//           <img src={emp2} alt="Employee 2" style={{ width: '100px', height: 'auto' }} />
//           <div className="info">
//             <span style={{ color: 'black', fontWeight: 'bold' }}>Elina Williams</span><br />
//             <span style={{ color: 'gray' }}>Designation here</span>
//           </div>
//         </div>
//         <div style={{ marginLeft: '20px' }}>
//           <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare nets sagittis in nunc convallis mattis maecenas. Tempus arc leo socis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.</p>
//         </div>
//       </div>

//       <div className="team-member" style={{ backgroundColor: '#E8F4FD', padding: '20px', margin: '10px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start' }}>
//         <div>
//           <img src={emp3} alt="Employee 3" style={{ width: '100px', height: 'auto' }} />
//           <div className="info">
//             <span style={{ color: 'black', fontWeight: 'bold' }}>John Smith</span><br />
//             <span style={{ color: 'gray' }}>Designation here</span>
//           </div>
//         </div>
//         <div style={{ marginLeft: '20px' }}>
//           <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;