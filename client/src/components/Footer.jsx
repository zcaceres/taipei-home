import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Footer.css';

export default class Footer extends Component {
  render() {
    return <div className="Footer flex justify-around flex-wrap">
      <div className="flex w-100 justify-evenly justify-around items-center flex-wrap">
        <div className="flex flex-column pa2">
          <div className="footer-title">Taipei Home</div>
          <div className="footer-copyright">Copyright 2018</div>
        </div>
        <div className="footer-social-media pa2">Facebook</div>
        {/* <div className="footer-about-us pa2">About Us</div> */}
      </div>
    </div>;
  }
}
