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
  }
})