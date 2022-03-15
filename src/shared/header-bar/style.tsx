import { StyleSheet } from 'react-native';
import colors from '../../styles/color';
import { deviceWidth, hp, paddingTopiOS, wp } from '../responsive-dimension';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.appBlack,
    width: deviceWidth,
    paddingTop: paddingTopiOS
  },
  navBar: {
    width: deviceWidth,
    backgroundColor: colors.appBlack,
    height: hp(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hp(20),
  },
  headerLeftIconContainer: {
    position: 'absolute',
    left: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: hp(1.5),
    borderRadius: hp(8),
    borderColor: colors.white,
    height: 28,
    width: 28,
  },
  leftIconContainer: {
    position: 'absolute',
    left: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
    height: 28,
    width: 28,
  },

  addCardContainer: {
    height: hp(51),
    width: wp(51),
    borderWidth: hp(1),
    borderColor: '#383838',
    position: 'absolute',
    right: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(17),
  },
  rightIconContainer: {
    position: 'absolute',
    right: wp(26),
  },
  rightStepContainer: {
    position: 'absolute',
    right: wp(26),
    height: hp(35),
    width: wp(93),
    backgroundColor: colors.lightBlack,
    borderRadius: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightContainer: {
    position: 'absolute',
    right: wp(26),
    height: hp(35),
    width: wp(85),
    backgroundColor: colors.primary,
    borderRadius: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightStepText: {
    color: colors.white,
    // fontFamily: Fonts.circularStdMedium,
    fontSize: hp(14),
  },
  filterIconContainer: {
    height: hp(51),
    width: wp(51),
    borderRadius: hp(17),
    borderWidth: hp(1),
    borderColor: '#5F5F5F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: wp(26),
  },
  filterIcon: {
    height: hp(20),
    width: wp(20),
  },
  scanIcon: {
    height: hp(24),
    width: wp(24),
  },
  headerTitle: {
    fontSize: hp(20),
    fontWeight: 'bold',
    fontFamily: 'Recoleta-Bold'
  },
  leftIcon: {
    height: hp(20),
    width: wp(20)
  },
  rightIcon: {
    width: wp(20),
    height: hp(20)
  }
})
