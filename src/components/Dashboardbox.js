// Dashboardbox.js
import React from 'react';
import Whitebox from './Whitebox';
import Bluebox from './Bluebox';

class Dashboardbox extends React.Component {
  render() {
    return (
      <div className="dashboardbox">
        <Whitebox />
        <div className="gap" /> {/* Add a gap between Whitebox and Bluebox */}
        <Bluebox />
      </div>
    );
  }
}

export default Dashboardbox;
