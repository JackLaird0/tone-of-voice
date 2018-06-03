import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class FullArticle extends Component {

  displayArticle = () => {
    if (!Object.keys(this.props.article).length) {
      return (
        <img src="http://profanderson.blog.etecarmine.com.br/wp-content/uploads/2017/10/loading-gif-transparent-10.gif" alt="loading gif"/>
      )
    } else {
      const {title, author, text, pageUrl} = this.props.article;
      return (
        <div>
          <h2>{title}</h2>
          <h5>{author}</h5>
          <p>{text}</p>
          <a href={pageUrl} target='_blank'> View Article</a>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        {this.displayArticle()}
      </div>
    )
  };
};

export const mapStateToProps = state => ({
  article: state.article
});

FullArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(FullArticle);