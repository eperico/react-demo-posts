import React, { Component }  from 'react'
import Render                from './NavRender'

class Nav extends Component {

  render() {
    return Render.call(this, this.props, this.state);
  }
}

export default Nav;
