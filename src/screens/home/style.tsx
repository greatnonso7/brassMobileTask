import { StyleSheet } from "react-native";
import { hp, wp } from "../../shared/responsive-dimension";
import colors from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  walletContainer: {
    width: wp(343),
    height: hp(98),
    marginTop: hp(20),
    backgroundColor: '#E6F5F6',
    borderRadius: hp(8),
    alignSelf: 'center',
    paddingHorizontal: wp(22),
    paddingVertical: hp(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  walletBalanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  walletText: {
    color: colors.lightGrey,
    fontSize: hp(14),
    fontFamily: 'Recoleta-Regular',
  },
  hideBalanceContainer: {
    marginLeft: wp(10),
  },
  fakeAmount: {
    fontSize: hp(22),
    fontWeight: 'bold',
    color: colors.dark,
    fontFamily: 'Recoleta-SemiBold',
  },
  walletIcon: {
    marginTop: hp(10),
    color: colors.primary,
  },
  buttonContainer: {
    marginTop: hp(40),
    marginHorizontal: wp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: wp(155),
    backgroundColor: '#E6F5F6',
  },
  buttonStyle2: {
    width: wp(155),
  },
  titleStyle: {
    color: colors.primary,
  }
})