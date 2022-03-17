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
    marginHorizontal: wp(23),
  },
  fullNameContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#E6F5F6',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  fullNameText: {
    fontSize: hp(35),
    fontFamily: 'Recoleta-Black',
  },
  amountValue: {
    paddingTop: hp(13),
    paddingBottom: hp(10),
    textAlign: 'center',
    fontSize: hp(20),
    fontFamily: 'Recoleta-SemiBold',
  },
  time: {
    fontSize: hp(16),
    fontFamily: 'Recoleta-SemiBold',
    textAlign: 'center',
  },
  seperator: {
    borderBottomWidth: 0.4,
    borderBottomColor: colors.lightGrey,
    paddingBottom: hp(30),
  },
  transactionsContainer: {
    marginTop: hp(20),
  },
  transactionsItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  headerTitle: {
    fontSize: hp(14),
    fontFamily: 'Recoleta-Regular',
  },
  bodyText: {
    fontSize: hp(15),
    fontFamily: 'Recoleta-SemiBold',
    maxWidth: wp(200)
  }
})