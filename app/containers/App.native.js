import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { AppState }           from 'react-native'
import Render                 from './AppRender'


import {
  appPause,
  appResume,
  updateAppState
} from '../actions/appStateActions'

/*
* The native app entry point
*/
class App extends Component {

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (nextAppState.match(/inactive|background/)) {
      this.props.dispatch(appPause())
    } else if (this.props.appState.match(/inactive|background/) && nextAppState === 'active') {
      this.props.dispatch(appResume())
    }
    this.props.dispatch(updateAppState(nextAppState))
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
    appState: store.appState.appState,
  }
}
export default connect(select)(App);
