import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSelectedOutlet, addNews } from './../../actions/actions';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { ABCNews, BBCNews, CBSNews, CNNNews, 
  WashPostNews, FoxNews } from './../../apicalls/api-call-urls';
import { Link } from 'react-router-dom'

export class Header extends Component {

  selectCategory = async (url, outlet) => {
    if(!this.props.news[outlet].length) {
      const news = await fetchNewsArticles(url);
      this.props.addNews(outlet, news.articles);
    }
    this.props.changeSelectedOutlet(outlet);
  }

  render() {
    return (
      <div className='header-container'>
        <h1> tone of voice </h1>
        <header className='header'>
          <Link to='/'>
            <button className='home' onClick={() => { this.props.changeSelectedOutlet('trending') }}>
              TRENDING
            </button>
          </Link>
          <Link to='/'> 
            <button className='fox' onClick={() => { this.selectCategory(FoxNews, 'fox') }}>
              FOX
            </button>
          </Link>
          <Link to='/'> 
            <button className='abc' onClick={() => { this.selectCategory(ABCNews, 'abc') }}>
              ABC
            </button>
          </Link>
          <Link to='/'> 
            <button className='bbc' onClick={() => { this.selectCategory(BBCNews, 'bbc') }}>
              BBC
            </button>
          </Link>
          <Link to='/'> 
            <button className='cnn' onClick={() => { this.selectCategory(CNNNews, 'cnn') }}>
              CNN
            </button>
          </Link>
          <Link to='/'> 
            <button className='cbs' onClick={() => { this.selectCategory(CBSNews, 'cbs') }}>
              CBS
            </button>
          </Link>
          <Link to='/'> 
            <button className='washPost' onClick={() => { this.selectCategory(WashPostNews, 'washPost') }}>
              WASH POST
            </button>
          </Link>
        </header>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  news: state.news
})

export const mapDispatchToProps = dispatch => ({
  changeSelectedOutlet: (outlet) => dispatch(changeSelectedOutlet(outlet)),
  addNews: (outlet, news) => dispatch(addNews(outlet, news))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
