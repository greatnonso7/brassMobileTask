import { format, parseISO, formatDistance } from 'date-fns';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../../shared/header-bar';
import { formatAmount, getLettersFromName } from '../../utils';
import { styles } from './style';

const SingleTransaction = ({ navigation, route }: any) => {

  const {
    full_name,
    account_number,
    bank_name,
    reference,
    created_at,
    amount,
    currency
  } = route.params?.item;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        hasBackButton
        headerTitle="Single Transaction"
        onPressLeftIcon={() => navigation.goBack()}
      />

      <View style={styles.bodyContainer}>
        <View style={styles.fullNameContainer}>
          <Text style={styles.fullNameText}>
            {getLettersFromName(full_name === 'N/A' ? 'John Doe' : full_name)}
          </Text>
        </View>

        <Text style={styles.amountValue}>
          {currency === 'NGN' ? '₦' : '$'}
          {formatAmount(amount)}
        </Text>

        <Text style={styles.time}>
          {formatDistance(new Date(created_at), Date.now(), { addSuffix: true })}
        </Text>

        <View style={styles.seperator} />
        <View style={styles.transactionsContainer}>
          <View style={styles.transactionsItemContainer}>
            <Text style={styles.headerTitle}>Receiver Account Number</Text>
            <Text style={styles.bodyText}>{account_number}</Text>
          </View>

          <View style={styles.transactionsItemContainer}>
            <Text style={styles.headerTitle}>Bank Name</Text>
            <Text style={styles.bodyText}>{bank_name}</Text>
          </View>

          <View style={styles.transactionsItemContainer}>
            <Text style={styles.headerTitle}>Beneficiary</Text>
            <Text style={styles.bodyText}>{full_name}</Text>
          </View>

          <View style={styles.transactionsItemContainer}>
            <Text style={styles.headerTitle}>Transaction Reference</Text>
            <Text style={styles.bodyText}>{reference}</Text>
          </View>

          <View style={styles.transactionsItemContainer}>
            <Text style={styles.headerTitle}>Time of Transaction</Text>
            <Text style={styles.bodyText}>{format(parseISO(created_at), 'MMMM d, yyyy')}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SingleTransaction;