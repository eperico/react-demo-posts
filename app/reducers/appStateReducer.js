import * as types from '../constants/ActionTypes'

const initialState = {
  appState: 'active',
  lastActiveState: null
};

function reducer(state=initialState, action) {
  const { type, payload } = action
  switch (type) {
    case types.UPDATE_APP_STATE:
      return {...state, appState: payload}

    case types.APP_PAUSE:
      return {...state, lastActiveState: Date.now()}

    default:
      return state
  }
}

export default reducer;
