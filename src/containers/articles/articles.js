import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNews, selectArticle, addToneData } from './../../actions/actions';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { fetchArticleInfo } from './../../apicalls/article-info-api-call';
import { fetchWatsonAnalysis } from './../../apicalls/watson-tone-api-call';
import { trendingNews } from './../../apicalls/api-call-urls';
import './Articles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Articles extends Component {

  componentDidMount() {
    if (!this.props.news.trending.length) {
      this.addArticleData()
    }
  }

  addArticleData = async () => {
    const news = await fetchNewsArticles(trendingNews);
    this.props.addNews('trending', news.articles);
  }

  compareData = async (storyUrl, name) => {
    if(!this.props.tone.name) {
      const articleInfo = await fetchArticleInfo(storyUrl);
      const analysis = await fetchWatsonAnalysis(articleInfo.objects[0].text);
      const analysisData = analysis.document_tone.tones; 
      this.props.addToneData(name, analysisData)
    }
  }

  viewArticle = async (storyUrl) => {
    this.props.selectArticle({});
    const articleInfo = await fetchArticleInfo(storyUrl);
    this.props.selectArticle(articleInfo.objects[0]);
  }

  checkForImage = (image, title) => {
    if (image) {
      return (
        <img className='article-image' src={image} alt={title}/>
      )
    }
  }

  displayToneData = (name) => {
    let toneData
    if(this.props.tone[name]) {
      toneData = this.props.tone[name].map(tone => {
        const toneScore = Math.floor(tone.score * 100)
        if (Object.keys(this.props.tone[name]).length) {
          return (
            <h4 className='tone-data'>{tone.tone_name}: {Math.floor(tone.score * 100)}%</h4>
          );
        } 
      });
    } 
    return toneData;
  }

  displayTrendingNews = () => {
    const stories = this.props.news[this.props.selected].map((story, index) => {
      const name = `${this.props.selected} ${index}`;
      return (
        <div className='article' key={name}>
          <div className='title-container'>
            <h3>{story.title.toUpperCase()}</h3>
          </div>
          <div className='image-tone-container'>
            <div className='image-tone'>
              {this.checkForImage(story.urlToImage, story.title)}
            </div>
              <div className='tone-container'>
                {this.displayToneData(name)}
              </div>
          </div>
          <div className="buttons-container">
            <Link to='/fullArticle'>
              <button className='view-article' onClick={() => {this.viewArticle(story.url)}}>VIEW ARTICLE</button>
            </Link>
            <button className="compare" onClick={() => {this.compareData(story.url, name)}}>CHECK OUT THE TONE</button>
          </div>
        </div>
      )
    })
    return stories;
  }

  render() {
    return (
      <div>
        <h2 className='selected-outlet'>{this.props.selected}</h2>
        <div className='article-container'>
          {this.displayTrendingNews()}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  news: state.news,
  selected: state.selected,
  article: state.article,
  tone: state.tone
});

 export const mapDispatchToProps = dispatch => ({
  addNews: (outlet, news) => dispatch(addNews(outlet, news)),
  selectArticle: (article) => dispatch(selectArticle(article)),
  addToneData: (name, tone) => dispatch(addToneData(name, tone))
});

Articles.propTypes = {
  news: PropTypes.object.isRequired,
  addNews: PropTypes.func,
  tone: PropTypes.object,
  selected: PropTypes.string,
  article: PropTypes.object,
  selectArticle: PropTypes.func,
  addToneData: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);