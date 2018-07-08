import React, { Component } from 'react';
import ResultsGrid from './ResultsGrid';
import PropTypes from 'prop-types';
import Search from './Search';
import axios from 'axios';
import '../styles/Body.css';

export default class Body extends Component {
  state = {
    results: [],
    lastPage: null
  }

  search = ({ near, nearType, roomType, price, lease = null, rooms = null }) => {
    axios.post('https://exec.clay.run/zachcaceres/taiwan-home', {
      near,
      nearType,
      roomType,
      price
    })
      .then(res => {
        const { data } = res;
        this.setState({ results: data.results, lastPage: data.lastPage })
      })
      .catch(err => console.error)
  }

  render() {
    console.log(this.props.results)
    return (<div className="Body w-100 flex flex-column pt4 content-center">
      <div className="flex flex-column tc flex-wrap items-center pb1">
        <div className="body-header mb3">
          🏠 <span className="callout">Find the best apartments in Taipei</span> (without speaking Mandarin)
        </div>
        <Search search={this.search}/>
      </div>
      <ResultsGrid results={this.state.results}/>
    </div>)
  }
}
