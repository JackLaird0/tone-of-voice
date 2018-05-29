import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Articles from './containers/articles/Articles';
import { Header } from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Articles} />
      </div>
    );
  }
}

export default App;
