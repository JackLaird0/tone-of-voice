import React, { Component } from 'react';
import { connect } from 'react-redux'

export class FullArticle extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if(!this.props.article.text) {
      this.props.history.push('/')
    }
  }

  render () {
    const {title, author, text, pageUrl} = this.props.article;
    return (
      <div>
        <h2>{title}</h2>
        <h5>{author}</h5>
        <p>{text}</p>
        <a href={pageUrl}></a>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  article: state.article
})

export default connect(mapStateToProps)(FullArticle)