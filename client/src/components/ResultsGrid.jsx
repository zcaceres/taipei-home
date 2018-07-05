import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ResultsGrid.css';

export default class ResultsGrid extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return (<div className="column-container">
      <div className="row-container justify-space-evenly">
        <div className="result">One</div>
        <div className="result">Two</div>
        <div className="result">Three</div>
        <div className="result">Four</div>
      </div>
      <div className="row-container justify-space-evenly">
        <div className="result">One</div>
        <div className="result">Two</div>
        <div className="result">Three</div>
        <div className="result">Four</div>
      </div>
      <div className="row-container justify-space-evenly">
        <div className="result">One</div>
        <div className="result">Two</div>
        <div className="result">Three</div>
        <div className="result">Four</div>
      </div>
      <div className="row-container justify-space-evenly">
        <div className="result">One</div>
        <div className="result">Two</div>
        <div className="result">Three</div>
        <div className="result">Four</div>
      </div>
      <div className="row-container justify-space-evenly">
        <div className="result">One</div>
        <div className="result">Two</div>
        <div className="result">Three</div>
        <div className="result">Four</div>
      </div>
      <div className="row-container justify-space-evenly">
        <div className="result">One</div>
        <div className="result">Two</div>
        <div className="result">Three</div>
        <div className="result">Four</div>
      </div>
    </div>);
  }
}
