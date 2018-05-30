import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNews } from './../../actions/actions';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { trendingNews } from './../../apicalls/api-call-urls'
import './Articles.css'

class Articles extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (!this.props.news.trending.length) {
      const news = await fetchNewsArticles(trendingNews);
      this.props.addNews('trending', news.articles);
    }
  }

  displayTrendingNews = () => {
    const stories = this.props.news[this.props.selected].map(story => {
      return (
        <div className='article'>
          <div className='title-container'>
            {story.title}
          </div>
          <img className='article-image' src={story.urlToImage} />
        </div>
      )
    })
    return stories;
  }

  render() {
    return (
      <div className='article-container'>
        {this.displayTrendingNews()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  addNews: (outlet, news) => dispatch(addNews(outlet, news))
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles);