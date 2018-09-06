import React, { Component } from 'react';
import Taiwan from '../assets/taiwan-icon.png';
import '../styles/Loading.css';

const Loading = () => (
  <div className="Loading mt5">
    <img className="Loading-image" src={Taiwan} alt="taiwan island outline" />
    <p className="Loading-text">Loading...</p>
  </div>
)

export default Loading
