import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { changeSelectedOutlet, addNews } from './../../actions/actions';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { ABCNews, BBCNews, CBSNews, CNNNews, 
  WashPostNews, FoxNews } from './../../apicalls/api-call-urls';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Header extends Component {

  selectCategory = async (url, outlet) => {
    if (!this.props.news[outlet].length) {
      const news = await fetchNewsArticles(url);
      this.props.addNews(outlet, news.articles);
    }
    this.props.changeSelectedOutlet(outlet);
  }

  render() {
    return (
      <div className='header-container'>
        <h1 className='title'> tone of voice </h1>
        <header className='header'>
          <h5 className='nav-title'> OUTLETS </h5>
          <NavLink to='/'>
            <div className=' news-link' 
              onClick={() => { this.props.changeSelectedOutlet('trending'); }}>
              TRENDING
            </div>
          </NavLink>
          <NavLink to='/'> 
            <div className=' news-link' 
              onClick={() => { this.selectCategory(FoxNews, 'fox'); }}>
              FOX
            </div>
          </NavLink>
          <NavLink to='/'> 
            <div className=' news-link' 
              onClick={() => { this.selectCategory(ABCNews, 'abc'); }}>
              ABC
            </div>
          </NavLink>
          <NavLink to='/'> 
            <div className=' news-link' 
              onClick={() => { this.selectCategory(BBCNews, 'bbc'); }}>
              BBC
            </div>
          </NavLink>
          <NavLink to='/'> 
            <div className=' news-link' 
              onClick={() => { this.selectCategory(CNNNews, 'cnn'); }}>
              CNN
            </div>
          </NavLink>
          <NavLink to='/'> 
            <div className=' news-link' 
              onClick={() => { this.selectCategory(CBSNews, 'cbs'); }}>
              CBS
            </div>
          </NavLink>
          <NavLink to='/'> 
            <div className=' news-link' 
              onClick={
                () => { this.selectCategory(WashPostNews, 'washPost'); }}>
              WASH POST
            </div>
          </NavLink>
        </header>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  news: state.news
});

export const mapDispatchToProps = dispatch => ({
  changeSelectedOutlet: (outlet) => dispatch(changeSelectedOutlet(outlet)),
  addNews: (outlet, news) => dispatch(addNews(outlet, news))
});

Header.propTypes = {
  news: PropTypes.object,
  changeSelectedOutlet: PropTypes.func,
  addNews: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
