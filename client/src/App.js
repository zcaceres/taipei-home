import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Body from './components/Body';
import './App.css';
import './hellotropical-webfont.ttf';
import './hellotropical-webfont.woff';
import './hellotropical-webfont.woff2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
