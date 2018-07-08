import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Result from './Result'
import '../styles/ResultsGrid.css';

export default class ResultsGrid extends Component {
  static propTypes = {
    results: PropTypes.array
  }

  static defaultProps = {
    results: []
  }

  render() {
    return (<div className="ResultsGrid w-100 mt4 flex flex-wrap">
      { Boolean(this.props.results.length) && this.props.results.map(result => (
        <Result
          price={result.price}
          bedrooms={result.bedrooms}
          url={result.url}
          img={result.img}
        />))
      }
    </div>);
  }
}
