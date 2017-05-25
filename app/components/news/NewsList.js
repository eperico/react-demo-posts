import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import Render               from './NewsListRender'

export default class List extends Component {

  render() {
    return Render.call(this, this.props, this.state)
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired
}
