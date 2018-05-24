import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import articles from './containers/articles/articles'

class App extends Component {
  render() {
    return (
      <Route path='/' component={articles} />
    );
  }
}

export default App;
