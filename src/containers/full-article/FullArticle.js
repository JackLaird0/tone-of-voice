import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './FullArticle.css';

export class FullArticle extends Component {

  displayArticle = () => {
    if (!Object.keys(this.props.article).length) {
      return (
        <img className='loading' 
          src="http://profanderson.blog.etecarmine.com.br/wp-content/uploads/2017/10/loading-gif-transparent-10.gif" 
          alt="loading gif"/>
      );
    } else {
      const {title, author, text, pageUrl} = this.props.article;
      const { url } = this.props.article.images[0];
      return ( 
        <div className='container'>
          <img src={url} alt='article-image' className='image'/>
          <div className='text-container'>
            <h2 className='article-title'>{title}</h2>
            <h5 className='article-author'>{author}</h5>
            <p className='article-text'>{text}</p>
          </div>
          <a href={pageUrl}  
            target='_blank' 
            className='article-link'> View Article</a>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        {this.displayArticle()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.article
});

FullArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(FullArticle);