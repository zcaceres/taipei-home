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
    nearValue: null,
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
    const { roomType, nearType, nearValue, price } = this.state;
    if (roomType && nearType === 'anywhere' && price) {
      console.log('SEARCHING anywhere', this.state)
      return this.props.search({ roomType, price });
    } else if (roomType && nearValue && price) {
      const near = {
        type: nearType,
        value: this.state.nearValue
      }
      console.log('SEARCHING', this.state)
      return this.props.search({ roomType, near, price });
    }
  }

  render() {
    const { roomType, nearValue, nearType, price } = this.state;
    return (<div className="Search tl mh5">
      <div className="search-text flex flex-wrap">
        <span className="mh3">Find me a </span><Select autofocus className="dropdown" name="roomType" onChange={this.handleChange} options={ROOM_TYPES} />
        {roomType && <Fragment><span className="mh3"> in Taipei near </span><Select className="dropdown" name="nearType" onChange={this.handleChange} options={NEAR_TYPES} /></Fragment>}
        {(nearType && nearType !== 'anywhere') && <Fragment><span className="mh3"> named </span><Select className="dropdown" name="nearValue" onChange={this.handleChange} options={nearType === 'station' ? NEAR_STATION : NEAR_SCHOOL } /></Fragment> }
        {(nearType === 'anywhere' || nearValue) && <Fragment><span className="mh3"> with a price of </span><Select className="dropdown" name="price" onChange={this.handleChange} options={PRICES} />.</Fragment>}
      </div>
    </div>)
  }
}
