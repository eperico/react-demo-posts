import React, { Component}  from 'react'
import { AppRegistry }      from 'react-native'
import Root                 from './app/native/Root'
import configureStore       from './app/store/configureStore.js'

const store = configureStore();

export default class ReactDemoPosts extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('ReactDemoPosts', () => ReactDemoPosts);
