import { StyleSheet } from "react-native";
import { hp, wp } from "../../shared/responsive-dimension";
import colors from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bodyContainer: {
    marginTop: hp(40),
    marginHorizontal: wp(25),
  },
  amountTextContainer: {
    height: hp(60),
    width: wp(323),
    borderWidth: 2,
    borderRadius: hp(5),
    borderColor: colors.primary,
    color: colors.dark,
    backgroundColor: '#E6F5F6',
    marginBottom: hp(20),
    justifyContent: 'center',
  },
  amountInput: {
    fontFamily: 'Recoleta-Regular',
    fontSize: hp(16),
    paddingLeft: hp(18),
  }
})