import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Result extends Component {
  static propTypes = {

  }

  state = {

  }

  getStyle(img) {
    return ({
      'background-image': `url(${img})`,
      'background-position': 'center',
      'background-size': 'cover'
    })
  }

  render() {
    const { bedrooms, price, url, img } = this.props;
    return <div onClick={() => window.open(url)} style={img && this.getStyle(img)} className="Result flex flex-column pa2 justify-between">
      <div className="bedrooms">{bedrooms > 0 ? `${bedrooms} bedrooms` : ''}</div>
      <div className="price self-center">{`${price}/mo`}</div>
      <div className="self-end" />
    </div>
  }
}
