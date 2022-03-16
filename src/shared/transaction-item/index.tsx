import { parseISO, format } from 'date-fns';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { sharedImages } from '../../../images';
import { formatAmount } from '../../utils';
import { hp, wp } from '../responsive-dimension';

const TransactionsItem = ({ item }: any) => {
  return (
    <View style={styles.transactionsContainer}>
      <View style={styles.transactionsHeaderContainer}>
        <Image source={sharedImages.deposit} resizeMode="contain" style={styles.transferIconStatus} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.fullname}>{item.full_name === 'N/A' ? 'John Doe' : item.full_name}</Text>
          <Text style={styles.timestamp}>{format(parseISO(item?.created_at), 'MMMM d, yyyy')}</Text>
        </View>
      </View>
      <Text style={styles.amount}>
        {item?.currency === 'NGN' ? '₦' : '$'}
        {formatAmount(item.amount)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  transactionsContainer: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(10),
    paddingBottom: hp(10),
    marginHorizontal: wp(20),
    borderBottomWidth: hp(0.5),
  },
  transactionsHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullname: {
    fontSize: hp(15),
    fontFamily: 'Recoleta-Regular',
  },
  timestamp: {
    fontSize: hp(14),
    fontFamily: 'Recoleta-Light',
  },
  amount: {
    fontSize: hp(15),
    fontFamily: 'Recoleta-Regular',
  },
  transferIconStatus: {
    width: wp(30),
    height: hp(30)
  }
})

export default TransactionsItem;