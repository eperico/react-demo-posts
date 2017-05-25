import _                           from 'underscore'
import React                       from 'react'
import PropTypes                   from 'prop-types'
import { connect }                 from 'react-redux'
import Render                      from './HeaderRender'

class Header extends React.Component {

  render() {
    return Render.call(this, this.props, this.state);
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const select = (store) => {
  return {
    headerTitle: store.appConfig.headerTitle,
  }
}
export default connect(select)(Header);
