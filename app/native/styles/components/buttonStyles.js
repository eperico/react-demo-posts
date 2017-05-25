// @flow
import { Colors, Fonts, Metrics }  from '../utils/'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
const ButtonStyles = {
  button: {
    paddingTop: 10,
    paddingRight: 25,
    paddingBottom: 10,
    paddingLeft: 25,
    borderRadius: Metrics.borderRadius
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Fonts.em(1),
    ...Fonts.fonts.openSansBold
  },
  buttonMain: {
    backgroundColor: Colors.main
  },
  buttonMainText: {
    color: Colors.white
  },
  buttonMainDark: {
    backgroundColor: Colors.mainDark
  },
  buttonCream: {
    backgroundColor: Colors.cream
  },
  buttonCreamText: {
    color: Colors.greyMedium
  }
}

export default ButtonStyles
//
// button
//   border: none
//   text-shadow: none
// .btn
//   display: inline-block
//   padding: 10px 25px
//   text-align: center
//   border-radius: 4px
//   &.btn--main
//     background-color: $main
//     color: $white
//   &.btn--main-d
//     background-color: $main-d
//     color: $white
//   &.btn--cream
//     background-color: $cream
//     color: $grey-m
//   &.btn--icon
//     display: flex
//     align-items: center
//     .icon
//       display: inline-block
//       vertical-align: middle
//     span
//       flex: 1
//   &.btn--call
//     height: 44px
//     width: 44px
//     padding: 0
//     text-align: center
//     border-radius: 50%
//     line-height: 14px
//     font-size: 1.414em
