import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { persistStore, autoRehydrate }  from 'redux-persist'
import thunk                            from 'redux-thunk'
import createLogger                     from 'redux-logger'
import promise                          from 'redux-promise-middleware'
import AUSAApp                          from '../reducers'

let storageStrategy = null
if (process.env.PLATFORM_ENV == 'web') {
  storageStrategy = require('localforage')
} else {
  const { AsyncStorage } = require('react-native')
  storageStrategy = AsyncStorage

}

const USE_PERSISTENCE = false

const TransientReducer = [
  'appConfig'
]

// create a store that has redux-thunk middleware, and dev tooling enabled.
// the logger middleware logs the previous state, the action, and the next
// state in the browser's console for easy debuggin' and instrementing the
// dev tools allows for us to commit different actions and go forwards and
// backwards in time using magic
const composeEnhancers = (process.env.PLATFORM_ENV == 'web' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const createDevStoreWithMiddleware = composeEnhancers(
  applyMiddleware(promise(), thunk),
  //applyMiddleware(createLogger()),
  autoRehydrate(),
  // global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop
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
  const store = createDevStoreWithMiddleware(AUSAApp);

  // enable webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  usePeristence(store)
  return store
}
