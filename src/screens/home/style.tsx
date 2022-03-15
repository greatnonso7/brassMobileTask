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
    backgroundColor: '#838F910D',
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
    fontSize: hp(13),
  },
  hideBalanceContainer: {
    marginLeft: wp(10),
  },
  fakeAmount: {
    fontSize: hp(22),
    fontWeight: 'bold',
    color: colors.dark,
  },
  walletIcon: {
    marginTop: hp(10),
    color: colors.primary,
  }
})