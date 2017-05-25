import { Metrics, Colors, Fonts } from '../utils/'

export default NavStyles = {
  nav: {
    height: Metrics.navBarHeight,
    backgroundColor: Colors.cream,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navLink: {
    flex: 1,
    height: Metrics.navBarHeight,
    justifyContent: 'center',
    position: 'relative'
  },
  navLinkActive: {
    backgroundColor: Colors.brownL
  },
  navIcon: {
    color: Colors.greyMedium,
    alignSelf: 'center'
  },
  navIconActive: {
    color: Colors.white
  },
  navText: {
    alignSelf: 'center',
    color: Colors.greyDark,
    fontSize: Fonts.em(0.7),
    ...Fonts.fonts.openSans
  },
  navTextActive: {
    color: Colors.white
  },
  navBubble: {
    height: 15,
    width: 15,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: Colors.main,
    position: 'absolute',
    top: 0,
    right: 5
  },
  navBubbleText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.em(0.7),
    ...Fonts.fonts.openSans
  }
}
