import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { persistStore, autoRehydrate }  from 'redux-persist'
import thunk                            from 'redux-thunk'
import promise                          from 'redux-promise-middleware'
import AUSAApp                          from '../reducers'

let storageStrategy = null
if (process.env.PLATFORM_ENV == 'web') {
  storageStrategy = require('localforage')
} else {
  const { AsyncStorage } = require('react-native')
  storageStrategy = AsyncStorage
}

const USE_PERSISTENCE = true

const TransientReducer = [
  'appConfig'
]

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = compose(
  applyMiddleware(promise(), thunk),
  autoRehydrate()
)(createStore);


function usePeristence(store) {
  if (USE_PERSISTENCE) {
    persistStore(store, {
      blacklist: TransientReducer,
      storage: storageStrategy,
    }, () => { console.log("rehydration completed") })
  }
}

export default function configureStore() {
  console.log("use production store");
  const store = createStoreWithMiddleware(AUSAApp)
  usePeristence(store)
  return store
}
