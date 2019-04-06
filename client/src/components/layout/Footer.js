import React, { Component } from 'react';
import './Footer.scss';
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            letterSpacing: '2px',
            minHeight: '5vh'
          }}
        >
          All Rights Reserved to Yuval Asidon 2018
        </div>
      </div>
    );
  }
}

export default Footer;
