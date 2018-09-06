import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Footer.css';

export default class Footer extends Component {
  render() {
    return <div className="Footer flex justify-around flex-wrap pv4">
      <div className="flex w-100 justify-evenly justify-around items-center flex-wrap">
        <div className="footer-title">Taipei Home</div>
        <div className="footer-copyright">Made with ❤️by <a href="https://sarasanchez.co" target="_blank">Sara Sánchez</a> and <a href="http://zachcaceres.com" target="_blank">Zach Caceres</a>, 2018</div>
      </div>
    </div>;
  }
}
