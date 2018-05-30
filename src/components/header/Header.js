import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSelectedOutlet, addNews } from './../../actions/actions';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { ABCNews, BBCNews, CBSNews, CNNNews, 
  WashPostNews, FoxNews } from './../../apicalls/api-call-urls'

const Header = (props) => {

  const selectCategory = async (url, outlet) => {
    if(!props.news[outlet].length) {
      const news = await fetchNewsArticles(url);
      props.addNews(outlet, news.articles);
    }
    props.changeSelectedOutlet(outlet);
  }

  return (
    <div className='header-container'>
      <h1> tone of voice </h1>
      <header className='header'>
        <button className='home' onClick={() => { props.changeSelectedOutlet('trending') }}>
          HOME
        </button>
        <button className='fox' onClick={() => { selectCategory(FoxNews, 'fox') }}>
          FOX
        </button>
        <button className='abc' onClick={() => { selectCategory(ABCNews, 'abc') }}>
          ABC
        </button>
        <button className='bbc' onClick={() => { selectCategory(BBCNews, 'bbc') }}>
          BBC
        </button>
        <button className='cnn' onClick={() => { selectCategory(CNNNews, 'cnn') }}>
          CNN
        </button>
        <button className='cbs' onClick={() => { selectCategory(CBSNews, 'cbs') }}>
          CBS
        </button>
        <button className='washPost' onClick={() => { selectCategory(WashPostNews, 'washPost') }}>
          WASH POST
        </button>
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = dispatch => ({
  changeSelectedOutlet: (outlet) => dispatch(changeSelectedOutlet(outlet)),
  addNews: (outlet, news) => dispatch(addNews(outlet, news))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
