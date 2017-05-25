import React                  from 'react'
import { View, Text, Button } from 'react-native'
import Icon                   from 'react-native-vector-icons/FontAwesome'

import styles from '../../../native/styles/layout/headerStyles'


export default function () {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{this.props.headerTitle}</Text>
    </View>
  );
}
