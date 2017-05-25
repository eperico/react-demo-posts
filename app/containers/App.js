import React, { Component }            from 'react'
import PropTypes                       from 'prop-types'
import { connect }                     from 'react-redux'
import Render                          from './AppRender'

import { windowResized }      from '../actions/appConfigActions'

/*
* The web app entry point
*/
class App extends Component {

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.props.dispatch(windowResized())
  }

  render() {
    return Render.call(this, this.props, this.state);
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object,
};

App.contextTypes= {
  router: PropTypes.object
};

const select = (store) => {
  return {
    loadingState: store.appConfig.loadingState,
  }
}
export default connect(select)(App);
