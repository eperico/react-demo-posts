import React, { Component }  from 'react'
import PropTypes             from 'prop-types'
import Render                           from './NavRender'
import { matchPath }                    from 'react-router'
import styles                           from '../../../native/styles/layout/navStyles'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.checkActive = this.checkActive.bind(this)
    this.setStyle = this.setStyle.bind(this)
  }

  checkActive( linkPath ) {
    let active = false
    const { location } = this.context.router.route
    if ( linkPath && location ) {
      active =  matchPath(linkPath, {
                  path:location.pathname,
                  exact: true,
                  strict: false
                })
    }
    return active
  }

  setStyle ( style, linkPath ){
    return this.checkActive(linkPath) ? [styles[style], styles[style+'Active']] : styles[style]
  }

  render() {
    return Render.call(this, this.props, this.state);
  }
}

Nav.contextTypes= {
  router: PropTypes.object
};

export default Nav;
