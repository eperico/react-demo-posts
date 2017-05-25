import _                      from 'underscore'
import * as types             from '../constants/ActionTypes'
import { API }                from '../core/api'
import { action, isOutdated } from './utils'
import { Config }             from '../config'

import axios from "axios"
import {
  FETCH_NEWS_URL
} from '../constants/Endpoints'

let api = API(Config.API_URL)


// ===== Fetch News =====

const fetchNews = () => {
  return {
    type: types.FETCH_NEWS,
    payload: axios.get(FETCH_NEWS_URL)
  }
}

const noNews = news => !news.list || news.list.length == 0 || !news.lastUpdated

const shouldFetchNews = (state) => {
  const news = state.news.items
  if (news.fetching) { return false }
  if (noNews(news)) { return true }
  return isOutdated(news.lastUpdated)
}

const fetchNewsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchNews(getState())) {
    return dispatch(fetchNews())
  }
}


// ===== Select/Fetch Article =====

const fetchArticle = (id) => {
  return {
    type: types.FETCH_ARTICLE,
    payload: axios.get(`${FETCH_NEWS_URL}/${id}`)
  }
}

const isNewArticle = (state, id) => {
  const currentArticle = state.news.item.data
  return !currentArticle || currentArticle.id != id
}

const selectArticle = (id) => (dispatch, getState) => {
  const news = getState().news.items.list
  if (isNewArticle(getState(), id)) {
    const item = _.find(news, (n) => { return n.id == id })
    if (item) {
      dispatch({ type: types.SELECT_ARTICLE, payload: item })
    } else {
      dispatch(fetchArticle(id))
    }
  }
}

export {
  fetchNewsIfNeeded,
  loadMoreNews,
  selectArticle,
};
