import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TopBar.css';

export default class TopBar extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return <div className="TopBar">
      <div className="logo-title-container">
        <div className="logo"/>
        <div className="title">Taiwan Home</div>
      </div>
      <div className="social-media">
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </div>
    </div>;
  }
}
