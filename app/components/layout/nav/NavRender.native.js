import React                                from 'react'
import { View, Text, TouchableHighlight }   from 'react-native'
import { Link }                             from 'react-router-native'
import Icon                                 from 'react-native-vector-icons/FontAwesome'
import styles                               from '../../../native/styles/layout/navStyles'

export default function () {
  return (
    <View style={styles.nav}>
      <Link style={this.setStyle('navLink',"/")} to="/">
        <View>
          <Icon style={this.setStyle('navIcon',"/")} name="home" size={20}/>
          <Text style={this.setStyle('navText',"/")}>Home</Text>
        </View>
      </Link>
      <Link style={this.setStyle('navLink',"/news")} to="/news">
        <View>
          <Icon style={this.setStyle('navIcon',"/news")} name="newspaper-o" size={20}/>
          <Text style={this.setStyle('navText',"/news")}>News</Text>
        </View>
      </Link>
    </View>
  );
}
