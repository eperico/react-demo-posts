import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles     from '../../native/styles/containers/homeStyles'


export default function () {

  return (
    <View style={styles.home}>
      <Text style={styles.homeTitle}>This is the Home Page</Text>
    </View>
  );
}
