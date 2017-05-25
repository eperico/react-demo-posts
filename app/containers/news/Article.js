import React, { Component } from 'react'
import PropTypes                       from 'prop-types'
import { connect }                     from 'react-redux'
import inflect                         from 'i'
import Render                          from './ArticleRender'

import {
  selectArticle
} from '../../actions/newsActions'

import { setHeaderTitle } from '../../actions/appConfigActions'


class Article extends Component {

  componentWillMount() {
    const { data } = this.props.article
    const { articleId } = this.props.match.params;
    this.props.dispatch(selectArticle(articleId))
    if (data) {
      this.updatePageContent(data)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { error, data } = nextProps.article
    if (error) {
      alert("Article not found")
      this.context.router.history.push("/news")
    } else if (data) {
      this.updatePageContent(data)
    }
  }

  // update after fetching the data, going back in history or displaying the cached item
  updatePageContent(data) {
    this.props.dispatch(setHeaderTitle(inflect().humanize(data.title)))
  }

  render() {
    return Render.call(this, this.props, this.state)
  }
}

Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Article.contextTypes= {
  router: PropTypes.object
};

const select = (store) => {
  return { article: store.news.item }
}
export default connect(select)(Article);
