import React, { Component } from 'react';
import ResultsGrid from './ResultsGrid';
import PropTypes from 'prop-types';
import '../styles/Body.css';

export default class Body extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return (<div className="Body">
      <div className="body-header-container">
        <div className="body-header">
          Find the best 🏠 to live...
        </div>
        <div className="body-search">
          SEARCH HERE
        </div>
      </div>
      <ResultsGrid />
    </div>)
  }
}
