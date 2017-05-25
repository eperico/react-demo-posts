import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { connect }          from 'react-redux'
import Render               from './NewsRender'

import {
  fetchNewsIfNeeded
} from '../../actions/newsActions'

import { setHeaderTitle } from '../../actions/appConfigActions'


class News extends Component {

  componentWillMount() {
    this.props.dispatch(setHeaderTitle('News'))
  }

  componentDidMount() {
    this.props.dispatch(fetchNewsIfNeeded())
  }

  render() {
    return Render.call(this, this.props, this.state)
  }
}


News.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

News.contextTypes= {
  router: PropTypes.object
};

const select = (store) => {
  return { news: store.news.items }
}
export default connect(select)(News);
