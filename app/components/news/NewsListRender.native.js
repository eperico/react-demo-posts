import React        from 'react'
import { Link }     from 'react-router-native'
import { truncate } from '../../core/utils'
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'

import styles from '../../native/styles/containers/newsStyles'

export default function () {
  const mappedArticles = this.props.items.map(it =>
    <View key={it.id} style={styles.news}>
      <Link to={`/article/${it.id}`}>
        <View>
          <View style={styles.newsDetails}>
            <Text style={styles.newsTitle} numberOfLines={1}>{it.title}</Text>
            <Text style={styles.newsDescription} numberOfLines={5}>{it.body}</Text>
          </View>
        </View>
      </Link>
    </View>
  )

  return (
    <View>{mappedArticles}</View>
  )
}
