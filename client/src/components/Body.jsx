import React, { Component } from 'react';
import ResultsGrid from './ResultsGrid';
import PropTypes from 'prop-types';
import Search from './Search';
import '../styles/Body.css';

export default class Body extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return (<div className="Body w-100 flex flex-column pt4 content-center">
      <div className="flex flex-column tc flex-wrap items-center pb1">
        <div className="body-header mb3">
          Find the best 🏠 to live...
        </div>
        <Search />
      </div>
      <ResultsGrid />
    </div>)
  }
}
