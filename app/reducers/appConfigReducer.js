import * as types from '../constants/ActionTypes'

const initialState = {
  headerTitle: '',
  loadingState: false,
  windowDimensions: {},
  isMobile: false,
};

function reducer(state=initialState, action) {
  const { type, payload } = action
  switch (true) {
    case /PENDING/.test(type):
      return {...state, loadingState: true}

    case /FULFILLED|REJECTED/.test(type):
      return {...state, loadingState: false}
  }

  switch (type) {
    case types.SET_HEADER_TITLE:
      return {...state, headerTitle: payload}

    case types.WINDOW_RESIZED:
      let newDimensions = {width:window.innerWidth, height:window.innerHeight}
      return {...state, windowDimensions: newDimensions, isMobile: (newDimensions.width < 768)}

    default:
      return state
  }
}

export default reducer;
