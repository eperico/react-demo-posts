import { Colors, Fonts, Metrics } from '../utils/'

export default HeaderStyles = {
  header: {
    height: Metrics.headerHeight,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight:20,
    backgroundColor: Colors.main,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    color: Colors.white,
    alignSelf: 'center',
    ...Fonts.fonts.openSansBold
  },
  headerIcon: {
    color: Colors.white
  }
}
