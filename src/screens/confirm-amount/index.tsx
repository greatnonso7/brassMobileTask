import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import LongButton from '../../shared/button';
import HeaderBar from '../../shared/header-bar';
import { formatAmount } from '../../utils';
import { styles } from './style';

const ConfirmAmount = ({ navigation, route }: any) => {

  const { amount, userAccountNumber, bankName, accountName, bankCode } = route.params?.data;

  const { FinTechServices: { makeTransfer } } = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const initiateTransfer = async () => {
    const data = {
      amount,
      account_bank: bankCode,
      account_number: userAccountNumber,
      currency: 'NGN',
    }
    setLoading(true);

    const res = await makeTransfer(data);

    if (Boolean(res)) {
      setLoading(false)
      toast.show('Transfer queued successfully', { type: 'success', duration: 1500 });

      setTimeout(() => {
        navigation.push('Home')
      }, 500)
    } else {
      setLoading(false)
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        hasBackButton
        headerTitle="Confirm Transfer"
        onPressLeftIcon={() => navigation.goBack()}
      />

      <View style={styles.bodyContainer}>
        <Text style={styles.nairaSign}>₦
          <Text style={styles.amountValue}> {formatAmount(amount)}</Text>
        </Text>

        <View style={styles.transferInfoContainer}>
          <View style={styles.transferItemInfoContainer}>
            <Text style={styles.transferItemHeader}>Destination Bank</Text>
            <Text style={styles.transferItemData}>{bankName}</Text>
          </View>
          <View style={styles.transferItemInfoContainer}>
            <Text style={styles.transferItemHeader}>Account Number</Text>
            <Text style={styles.transferItemData}>{userAccountNumber}</Text>
          </View>

          <View style={styles.transferItemInfoContainer}>
            <Text style={styles.transferItemHeader}>Beneficiary</Text>
            <Text style={styles.transferItemData}>{accountName}</Text>
          </View>

          <View style={styles.transferItemInfoContainer}>
            <Text style={styles.transferItemHeader}>Transfer Amount</Text>
            <Text style={styles.transferItemData}>₦{formatAmount(amount)}</Text>
          </View>
        </View>
      </View>

      <LongButton title="Confirm Transfer" loading={loading} onPress={() => initiateTransfer()} />
    </SafeAreaView>
  )
}

export default ConfirmAmount;