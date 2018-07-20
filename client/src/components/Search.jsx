import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select'
import '../styles/Search.css'
import NEAR_TYPES from '../options/neartypes'
import ROOM_TYPES from '../options/roomTypes'
import NEAR from '../options/near'
import PRICES from '../options/prices'
const NEAR_SCHOOL = NEAR.schools
const NEAR_STATION = NEAR.stations

export default class Search extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    roomType: PropTypes.string,
    nearValue: PropTypes.string,
    nearType: PropTypes.string,
    price: PropTypes.string
  }

  render() {
    const { roomType, nearValue, nearType, price } = this.props;
    return (<div className="Search tl mh5">
      <div className="search-text flex flex-wrap">
        <span className="mh3">Find me a </span><Select autofocus className="dropdown" name="roomType" onChange={this.props.handleChange} options={ROOM_TYPES} />
        {roomType && <Fragment><span className="mh3"> in Taipei near </span><Select className="dropdown" name="nearType" onChange={this.props.handleChange} options={NEAR_TYPES} /></Fragment>}
        {(nearType && nearType !== 'anywhere') && <Fragment><span className="mh3"> named </span><Select className="dropdown" name="nearValue" onChange={this.props.handleChange} options={nearType === 'station' ? NEAR_STATION : NEAR_SCHOOL } /></Fragment> }
        {(nearType === 'anywhere' || nearValue) && <Fragment><span className="mh3"> with a price of </span><Select className="dropdown" name="price" onChange={this.props.handleChange} options={PRICES} /> .</Fragment>}
      </div>
    </div>)
  }
}
