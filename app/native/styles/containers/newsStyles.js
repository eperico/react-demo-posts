import { Colors, Fonts } from '../utils/'

const NewsStyles = {
  news: {
    flex: 1,
    marginBottom: 20
  },
  newsPicture: {
    flex: 1,
    minHeight: 150,
    backgroundColor: Colors.greyLight
  },
  newsDetails: {
    padding: 15,
    backgroundColor: Colors.cream
  },
  newsTitle: {
    marginBottom: 15,
    flexWrap: 'nowrap',
    fontSize: Fonts.em(1.414),
    ...Fonts.fonts.openSans
  },
  newsDescription: {
    fontSize: Fonts.em(1),
    ...Fonts.fonts.openSans
  }
}
export default NewsStyles
