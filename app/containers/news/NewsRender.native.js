import React  from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import List   from '../../components/news/NewsList'

export default function () {
  return (
    <View>
      <List items={this.props.news.list}/>
    </View>
  );
}
