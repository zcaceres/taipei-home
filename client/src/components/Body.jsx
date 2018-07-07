import React, { Component } from 'react';
import ResultsGrid from './ResultsGrid';
import PropTypes from 'prop-types';
import Search from './Search';
import axios from 'axios';
import '../styles/Body.css';

export default class Body extends Component {
  state = {
    results: []
  }

  search = ({ near, aptType, budget, lease, rooms }) => {
    axios.post('https://exec.clay.run/zachcaceres/taiwan-home', {})
      .then(res => this.setState({ results: res.data.results.data.data }))
      .catch(err => console.error)

  }

  render() {
    console.log(this.props.results)
    return (<div className="Body w-100 flex flex-column pt4 content-center">
      <div className="flex flex-column tc flex-wrap items-center pb1">
        <div className="body-header mb3">
          🏠 Search Mandarin apartment listings in English.
        </div>
        <Search search={this.search}/>
      </div>
      <ResultsGrid results={this.state.results}/>
    </div>)
  }
}
