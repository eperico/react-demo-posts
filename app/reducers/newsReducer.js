import * as types from '../constants/ActionTypes'

const initialState = {
  items: {
    list: [],
    fetching: false,
    lastUpdated: null,
    error: null,
  },
  item: {
    data: null,
    fetching: false,
    fetched: false,
    error: null,
  }
};

// state is items here
function reduceNews(state = initialState.items, action) {
  const { type, payload } = action
  switch (type) {
    case types.FETCH_NEWS_PENDING:
      return {...state, fetching: true, error: null}

    case types.FETCH_NEWS_REJECTED:
      return {...state, fetching: false, error: payload}

    case types.FETCH_NEWS_FULFILLED:
      return {...state, fetching: false, lastUpdated: Date.now(), list: payload.data }

    default:
      return state
  }
}

// state is item here
function reduceArticle(state = initialState.item, action) {
  const { type, payload } = action
  switch (type) {
    case types.SELECT_ARTICLE:
      return {...state, fetched: true, data: payload, error: null}

    case types.FETCH_ARTICLE_PENDING:
      return {...state, fetching: true, error: null}

    case types.FETCH_ARTICLE_REJECTED:
      return {...state, fetching: false, error: payload}

    case types.FETCH_ARTICLE_FULFILLED:
      return {...state, fetching: false, fetched: true, data: payload.data}

    default:
      return state
  }
}

function reducer(state=initialState, action) {
  switch (action.type) {
    case types.FETCH_NEWS_PENDING:
    case types.FETCH_NEWS_REJECTED:
    case types.FETCH_NEWS_FULFILLED:
      return {...state, items: reduceNews(state.items, action)}

    case types.SELECT_ARTICLE:
    case types.FETCH_ARTICLE_PENDING:
    case types.FETCH_ARTICLE_REJECTED:
    case types.FETCH_ARTICLE_FULFILLED:
      return {...state, item: reduceArticle(state.item, action)}

    default:
      return state
  }
}

export default reducer;
