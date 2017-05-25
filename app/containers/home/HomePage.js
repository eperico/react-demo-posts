import React                           from 'react'
import PropTypes                       from 'prop-types'
import { connect }                     from 'react-redux'
import Render                          from './HomePageRender'

import { setHeaderTitle }    from '../../actions/appConfigActions'

class HomePage extends React.Component {

  componentWillMount() {
    this.props.dispatch(setHeaderTitle('Home'))
  }

  render() {
    return Render.call(this, this.props, this.state)
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const select = (store) => {
  return {}
}
export default connect(select)(HomePage);
