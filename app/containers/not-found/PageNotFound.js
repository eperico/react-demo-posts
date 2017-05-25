import React, { Component } from 'react'
import { connect }                     from 'react-redux'
import Render               from './PageNotFoundRender'
import { setHeaderTitle }   from '../../actions/appConfigActions'


class PageNotFound extends Component {
  componentWillMount() {
    this.props.dispatch(setHeaderTitle(''))
  }

  render() {
    return Render.call(this, this.props, this.state)
  }
}
const select = (store) => {
  return {};
}
export default connect(select)(PageNotFound);
