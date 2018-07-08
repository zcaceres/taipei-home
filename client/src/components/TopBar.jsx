import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TopBar.css';

export default class TopBar extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return <div className="TopBar w-100 flex items-center ph3 justify-between">
      <div className="logo-title-container content-center">
        <div className="logo"/>
        <div className="title">Taipei Home</div>
      </div>
      <div className="flex justify-between">
        {/* TODO: SOCIAL MEDIA */}
      </div>
    </div>;
  }
}
