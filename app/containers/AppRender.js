import React           from 'react'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Article              from '../containers/news/Article'
import News                 from '../containers/news/News'
import HomePage             from '../containers/home/HomePage'
import PageNotFound         from '../containers/not-found/PageNotFound'

import Header               from '../components/layout/header/Header'
import Nav                  from '../components/layout/nav/Nav'


export default function() {
  const { loadingState } = this.props
  let history = createBrowserHistory()

  return (
    <BrowserRouter history={history}>
      <div>
        <Header/>
        <main className="container">
          <Switch>
            <Route exact path='/'                component={ HomePage } />
            <Route path='/news'                  component={ News } />
            <Route path='/article/:articleId'    component={ Article } />
            <Route                               component={ PageNotFound } />
          </Switch>
        </main>
        <Nav/>
      </div>
    </BrowserRouter>
  );
}
