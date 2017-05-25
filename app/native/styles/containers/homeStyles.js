import { Colors, Fonts } from '../utils/'

const homeStyles = {
  home: {
    flex: 1
  },
  homeTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: Fonts.em(1),
    color: Colors.greyMedium,
    ...Fonts.fonts.openSansBold
  }
}
export default homeStyles
