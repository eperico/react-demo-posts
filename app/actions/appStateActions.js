import * as types     from '../constants/ActionTypes'
import { isOutdated } from './utils'

const updateAppState = (state) => {
  return { type: types.UPDATE_APP_STATE, payload: state }
}

const appPause = () => {
  return { type: types.APP_PAUSE }
}

const appResume = () => (dispatch, getState) => {
  dispatch({ type: types.APP_RESUME })
  const lastActiveState = getState().appState.lastActiveState
  if (isOutdated(lastActiveState)) {
    dispatch({ type: types.REFRESH_APP })
  }
}

export {
  updateAppState,
  appPause,
  appResume,
};
