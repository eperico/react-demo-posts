import * as types from '../constants/ActionTypes'

const setHeaderTitle = (title) => (dispatch, getState) => {
  if (title != getState().appConfig.headerTitle) {
    dispatch({type: types.SET_HEADER_TITLE, payload: title})
  }
}

const windowResized = (dimensions) => {
  return { type: types.WINDOW_RESIZED }
}

export {
  setHeaderTitle,
  windowResized
};
