import { combineReducers } from 'redux'

import appConfig        from './appConfigReducer'
import appState         from './appStateReducer'
import news             from './newsReducer'


// add your reducer to the blacklist on redux-persist if your reducer is transient
export default combineReducers({
  appConfig,
  appState,
  news
})
