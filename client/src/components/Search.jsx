import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select'
import '../styles/Search.css'
import 'react-select/dist/react-select.css'
import ROOM_TYPES from '../options/roomTypes'
import NEAR from '../options/near'
import PRICES from '../options/prices'


export default class Search extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  }

  state = {
    roomType: null,
    near: null,
    price: null
  }

  handleChange = (selectedOption) => {
    if (!selectedOption) return
    const { searchField } = selectedOption
    this.setState({ [searchField]: selectedOption.value }, this.search);
  }

  search = () => {
    const { roomType, near, price } = this.state;
    if (roomType && near && price) {
      this.props.search({});
    }
  }

  render() {
    const { roomType, near, price } = this.state;
    return (<div className="Search tl mh5">
      <div className="search-text flex flex-wrap">
        <span>Find me a </span><Select className="dropdown mh3" name="roomType" value={roomType} onChange={this.handleChange} options={ROOM_TYPES} />
        {roomType && <Fragment><span> in Taipei near </span><Select className="dropdown mh3" name="near" value={near} onChange={this.handleChange} options={NEAR} /></Fragment>}
        {near && <Fragment><span> with a price of </span><Select className="dropdown mh3" name="price" value={price} onChange={this.handleChange} options={PRICES} /></Fragment>}
      </div>
    </div>)
  }
}
