import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Result extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return <div className="Result flex flex-column pa2 justify-between">
      <div className="site">591.tw.com</div>
      <div className="neighborhood self-center">Neighborhood</div>
      <div className="price self-end">$450</div>
    </div>
  }
}
