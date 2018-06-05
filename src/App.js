import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Articles from './containers/articles/Articles';
import Header from './components/header/Header';
import FullArticle from './containers/full-article/FullArticle'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Articles} />
        <Route path='/fullArticle' component={FullArticle} />
      </div>
    );
  }
}

export default App;
