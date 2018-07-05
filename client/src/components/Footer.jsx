import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Footer.css';

export default class Footer extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return <div className="Footer">
      <div className="row-container width-50 justify-space-evenly align-items-center">
        <div className="column-container">
          <div className="footer-title">Taiwan Home</div>
          <div className="footer-copyright">Copyright 2018</div>
        </div>
        <div className="footer-about-us">About Us</div>
        <div className="footer-social-media">Social Media</div>
      </div>
      <div className="row-container width-50 justify-space-evenly align-items-center">
        <div className="column-container">
          <div className="footer-subscribe">Subscribe</div>
          <input />
        </div>
        <div className="column-container">
          <div>Taipei, Taiwan</div>
          <div>email@email.com</div>
        </div>
      </div>
    </div>;
  }
}
