import React, { Component } from 'react';
import ResultsGrid from './ResultsGrid';
import PropTypes from 'prop-types';
import Search from './Search';
import Loading from './Loading';
import axios from 'axios';
import '../styles/Body.css';

export default class Body extends Component {
  state = {
    results: [],
    loading: false,
    searchLoading: false,
    nextPage: null,
    roomType: null,
    nearValue: null,
    nearType: null,
    price: null,
    hasSearchedAtLeastOnce: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenForBottom)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenForBottom)
  }

  handleSearchChange = (selectedOption) => {
    if (!selectedOption) return
    const { searchField } = selectedOption
    if (selectedOption.value === 'anywhere') {
      return this.setState({ [searchField]: selectedOption.value, near: null }, this.search)
    }
    this.setState({ [searchField]: selectedOption.value }, this.search);
  }

  listenForBottom = () => {
    if (window.scrollY + window.innerHeight === document.body.scrollHeight) {
      if (this.state.loading) return console.log('ALREADY LOADING');
      this.fetchMore()
    }
  }

  search = () => {
    const { roomType, nearType, nearValue, price } = this.state;
    if (roomType && nearType === 'anywhere' && price) {
      return this.requestSearchResults({ roomType, price });
    } else if (roomType && nearValue && price) {
      const near = {
        type: nearType,
        value: nearValue
      }
      return this.requestSearchResults({ roomType, near, price });
    }
  }

  // TODO: lease, rooms
  requestSearchResults = ({ near, nearType, roomType, price, lease = null, rooms = null }) => {
    this.setState({ loading: true, searchLoading: true })
    axios.post('https://exec.clay.run/zachcaceres/taiwan-home', {
      near,
      nearType,
      roomType,
      price
    })
      .then(res => {
        const { data } = res;
        this.setState({
          loading: false,
          searchLoading: false,
          results: data.results,
          nextPage: 1,
          hasSearchedAtLeastOnce: true
        })
        // After the first request, we begin to count pages. First request === page 0
      })
      .catch(err => {
        this.setState({
          loading: false,
          searchLoading: false,
          hasSearchedAtLeastOnce: true
        })
        console.error(err)
      })
  }

  fetchMore = () => {
    const { near, nearType, roomType, price, nextPage } = this.state
    if (!roomType || !price) return; // Don't let people fetch more until search is defined
    this.setState({ loading: true })
    axios.post('https://exec.clay.run/zachcaceres/taiwan-home', {
      near,
      nearType,
      roomType,
      price,
      pageNum: nextPage
    })
      .then(res => {
        const { data } = res;
        this.setState({ loading: false, results: this.state.results.concat(data.results), nextPage: this.state.nextPage + 1 })
        // After each successful request, we increment the page
      })
      .catch(err => {
        this.setState({ loading: false })
        console.error(err)
      })
  }

  render() {
    const { loading, hasSearchedAtLeastOnce } = this.state
    return (
      <div className="Body w-100 flex flex-column pt4 content-center">
        <div className="flex flex-column tc flex-wrap items-center pb1">
          <div className="body-header mb3">
            🏠 <span className="callout">Find the best apartments in Taipei</span> (without speaking Mandarin)
          </div>
          {loading ?
            <Loading />
            :
            <Search
              search={this.search}
              loading={loading}
              handleChange={this.handleSearchChange}
              {...this.state}
            />}
        </div>
        {hasSearchedAtLeastOnce && <ResultsGrid results={this.state.results} />}
      </div>
    )
  }
}
