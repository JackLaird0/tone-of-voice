import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrendingNews } from './../../actions/actions';
import { fetchTrendingNews } from './../../apicalls/news-api-calls';

class articles extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const news = await fetchTrendingNews();
    this.props.addTrendingNews(news.articles);
  }

  displayTrendingNews = () => {
    console.log(this.props.trendingNews)
    const stories = this.props.trendingNews.map(story => {
      return (
        <div>
          <p>{story.title}</p>
          <img src={story.urlToImage} />
        </div>
      )
    })
    return stories;
  }

  render() {
    return (
      <div>
        {this.displayTrendingNews()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trendingNews: state.trending
});

const mapDispatchToProps = dispatch => ({
  addTrendingNews: (story) => dispatch(addTrendingNews(story))
})

export default connect(mapStateToProps, mapDispatchToProps)(articles);