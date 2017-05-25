import                       'babel-polyfill'
import React            from 'react'
import { render }       from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root             from './Root'
import configureStore   from '../store/configureStore'

// load our css
if (process.env.PLATFORM_ENV === 'web')
  require('./styles/main.sass')

const store = configureStore()
const rootElement = document.getElementById('root')

render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default
    render(
      <AppContainer>
        <NewRoot store={store}/>
      </AppContainer>,
      rootElement
    );
  });
}
