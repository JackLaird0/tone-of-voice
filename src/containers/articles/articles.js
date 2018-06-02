import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNews, selectArticle } from './../../actions/actions';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { fetchArticleInfo } from './../../apicalls/article-info-api-call';
import { fetchWatsonAnalysis } from './../../apicalls/watson-tone-api-call';
import { trendingNews } from './../../apicalls/api-call-urls'
import './Articles.css'
import { Link } from 'react-router-dom'

export class Articles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.news.trending.length) {
      this.addArticleData()
    }
  }

  addArticleData = async () => {
    const news = await fetchNewsArticles(trendingNews);
    this.props.addNews('trending', news.articles);
  }

  compareData = async (storyUrl) => {
    
  }

  viewArticle = async (storyUrl) => {
    const articleInfo = await fetchArticleInfo(storyUrl);
    this.props.selectArticle(articleInfo.objects[0]);
  }

  displayTrendingNews = () => {
    const stories = this.props.news[this.props.selected].map((story, index) => {
      return (
        <div className='article' key={`${this.props.selected} ${index}`}>
          <div className='title-container'>
            {story.title.toUpperCase()}
          </div>
          <img className='article-image' src={story.urlToImage} />
          <button className="compare" onClick={() => {this.compareData()}}>COMPARE</button>
          <Link to='/fullArticle'>
            <button className='view-article' onClick={() => {this.viewArticle(story.url)}}>VIEW STORY</button>
          </Link>
        </div>
      )
    })
    return stories;
  }

  render() {
    return (
      <div>
        <h1>{this.props.selected}</h1>
        <div className='article-container'>
          {this.displayTrendingNews()}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  news: state.news,
  selected: state.selected
});

 export const mapDispatchToProps = dispatch => ({
  addNews: (outlet, news) => dispatch(addNews(outlet, news)),
  selectArticle: (article) => dispatch(selectArticle(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles);