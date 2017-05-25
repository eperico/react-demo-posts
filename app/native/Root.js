import React, { Component }  from 'react'
import PropTypes             from 'prop-types'
import { StyleSheet }        from 'react-native'
import { Provider }          from 'react-redux'
import App                   from '../containers/App'

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <App/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
