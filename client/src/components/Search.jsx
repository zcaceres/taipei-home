import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import '../styles/Search.css';
import 'react-select/dist/react-select.css';

const options = [
  { value: 'one', label: 'roomType' },
  { value: 'two', label: 'near' },
  { value: 'three', label: 'price' }
]

export default class Search extends Component {
  static propTypes = {

  }

  state = {
    roomType: null,
    near: null,
    price: null
  }

  handleChange = (selectedOption) => {
    console.log(selectedOption)
    this.setState({ [selectedOption.label]: selectedOption.value });
  }

  render() {
    const { roomType, near, price } = this.state;
    return (<div className="Search tl mh5">
      <div className="search-text flex flex-wrap">
        <span>Find me a </span><Select className="dropdown" name="roomType" value={roomType} onChange={this.handleChange} options={options} />
        {roomType && <Fragment><span> in Taipei near </span><Select className="dropdown" name="near" value={near} onChange={this.handleChange} options={options} /></Fragment>}
        {near && <Fragment><span> with a price of </span><Select className="dropdown" name="price" value={price} onChange={this.handleChange} options={options} /></Fragment>}
      </div>
    </div>)
  }
}
