// @flow
import { Platform } from 'react-native'
import Colors from './utils/Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  page: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.paper
  },
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

export default ApplicationStyles
