import React                            from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  Route,
  Switch,
  nativeHistory,
  NativeRouter,
  Redirect
} from 'react-router-native'
import styles           from '../native/styles/ApplicationStyles'

import Header           from '../components/layout/header/Header'
import Nav              from '../components/layout/nav/Nav'

import HomePage         from '../containers/home/HomePage'
import Article          from '../containers/news/Article'
import News             from '../containers/news/News'
import PageNotFound     from '../containers/not-found/PageNotFound'

// The app entry point
export default function() {

  return (
    <NativeRouter history={nativeHistory}>
      <View style={styles.screen}>
        <Header/>
        <ScrollView style={styles.page}>
          <Switch>
            <Route exact path='/'                  component={ HomePage } />
            <Route path='/news'                    component={ News } />
            <Route                                 component={ PageNotFound } />
            <Route path='article/:articleId'       component={ Article } />
          </Switch>
        </ScrollView>
        <Nav/>
      </View>
    </NativeRouter>
  );
}
