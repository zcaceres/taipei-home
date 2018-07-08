import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Result extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return <div className="Result flex flex-column pa2 justify-between">
      <div className="bedrooms">2 bedrooms</div>
      <div className="price self-center">$450/mo</div>
      <div className="self-end" />
    </div>
  }
}
