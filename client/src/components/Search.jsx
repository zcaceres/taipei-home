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
    search: PropTypes.func.isRequired
  }

  state = {
    roomType: null,
    near: null,
    nearType: null,
    price: null
  }

  handleChange = (selectedOption) => {
    console.log('hi', selectedOption)
    if (!selectedOption) return
    const { searchField } = selectedOption
    if (selectedOption.value === 'anywhere') {
      return this.setState({ [searchField]: selectedOption.value, near: null }, this.search)
    }
    this.setState({ [searchField]: selectedOption.value }, this.search);
  }

  search = () => {
    const { roomType, near, nearType, price } = this.state;
    if (roomType && nearType === 'anywhere' && price) {
      console.log('SEARCHING anywhere', this.state)
      // return this.props.search({});
    } else if (roomType && near && price) {
      console.log('SEARCHING', this.state)
      // return this.props.search({});
    }
  }

  render() {
    const { roomType, near, nearType, price } = this.state;
    return (<div className="Search tl mh5">
      <div className="search-text flex flex-wrap">
        <span className="mh3">Find me a </span><Select autofocus className="dropdown" name="roomType" onChange={this.handleChange} options={ROOM_TYPES} />
        {roomType && <Fragment><span className="mh3"> in Taipei near </span><Select className="dropdown" name="nearType" onChange={this.handleChange} options={NEAR_TYPES} /></Fragment>}
        {(nearType && nearType !== 'anywhere') && <Fragment><span className="mh3"> named </span><Select className="dropdown" name="near" onChange={this.handleChange} options={nearType === 'station' ? NEAR_STATION : NEAR_SCHOOL } /></Fragment> }
        {(nearType === 'anywhere' || near) && <Fragment><span className="mh3"> with a price of </span><Select className="dropdown" name="price" onChange={this.handleChange} options={PRICES} />.</Fragment>}
      </div>
    </div>)
  }
}
