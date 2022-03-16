import { StyleSheet } from 'react-native';
import { hp, wp } from '../../shared/responsive-dimension';
import colors from '../../styles/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bodyContainer: {
    marginTop: hp(30),
    marginHorizontal: wp(20),
  },
  nairaSign: {
    alignSelf: 'center',
    fontSize: hp(14),
    fontFamily: 'Recoleta-SemiBold',
  },
  amountValue: {
    fontSize: hp(30),
  },
  transferInfoContainer: {
    marginTop: hp(30),
  },
  transferItemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(20),
  },
  transferItemHeader: {
    fontSize: hp(16),
    fontFamily: 'Recoleta-Light',
  },
  transferItemData: {
    fontSize: hp(17),
    fontFamily: 'Recoleta-SemiBold',
  }
})