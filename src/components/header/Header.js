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
      <header className='header'>
        <button onClick={() => { props.changeSelectedOutlet('trending') }}>
          Home
        </button>
        <button onClick={() => { selectCategory(ABCNews, 'abc') }}>
          <img className='image' src='https://vignette.wikia.nocookie.net/central/images/3/3b/ABC_logo.png/revision/latest?cb=20180306094342' alt='abc' />
        </button>
        <button onClick={() => { selectCategory(BBCNews, 'bbc') }}>
          <img className='bbc-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BBC_World_News_red.svg/500px-BBC_World_News_red.svg.png' alt='bbc' />
        </button>
        <button onClick={() => { selectCategory(CBSNews, 'cbs') }}>
          <img className='image' src='http://posturemonth.org/wp-content/uploads/2018/05/cbs.png' alt='cbs' />
        </button>
        <button onClick={() => { selectCategory(CNNNews, 'cnn') }}>
          CNN
        </button>
        <button onClick={() => { selectCategory(WashPostNews, 'washPost') }}>
          Washington Post
        </button>
        <button onClick={() => { selectCategory(FoxNews, 'fox') }}>
          Fox
        </button>
      </header>
      <input type='text' />
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
