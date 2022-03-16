import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import LongButton from '../../shared/button';
import CustomPicker from '../../shared/custom-picker';
import HeaderBar from '../../shared/header-bar';
import FormTextInput from '../../shared/text-input';
import { styles } from './style';
import CurrencyInput from 'react-native-currency-input';
import colors from '../../styles/color';


const SendMoney = ({ navigation }: any) => {
  const [bankName, setBankName] = useState<string>();
  const [bankCode, setBankCode] = useState<string>();
  const [amount, setAmount] = useState<number | null>();
  const [accountName, setAccountName] = useState<string>();
  const [userAccountNumber, setUserAccountNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { FinTechServices: { verifyAccountNumber } } = useDispatch();


  const handle = (data: { bankName: string; bankCode: string }) => {
    if (!data) return;
    setBankName(data.bankName);
    setBankCode(data.bankCode);
  };

  const setAccountNumber = async (accountNumber: string) => {
    if (accountNumber?.length === 10 && bankName !== '') {
      const data = {
        account_number: accountNumber,
        account_bank: bankCode,
      }
      setLoading(true)
      const res = await verifyAccountNumber(data);
      if (res) {
        setAccountName(res?.account_name);
        setLoading(false)
      } else {
        setAccountName('');
        setLoading(false)
      }
    } else {
      setUserAccountNumber(accountNumber)
    }
    setUserAccountNumber(accountNumber)
  }

  const verification = async () => {
    if (!amount) {
      return toast.show('Amount is required', { type: 'danger', duration: 1500 })
    }
    if (amount < 100 || amount > 10000000) {
      return toast.show('Transfer amount should be between 100 and 10,000,00',
        { type: 'danger', duration: 1500 })
    }

    if (!bankName) {
      return toast.show('Destination bank is required', { type: 'danger', duration: 1500 })
    }

    if (!userAccountNumber) {
      return toast.show('Destination account number is required', { type: 'danger', duration: 1500 })
    }

    const data = {
      amount: amount.toString(),
      bankName,
      bankCode,
      userAccountNumber,
      accountName,
    }
    navigation.navigate('ConfirmAmount', { data })

    setBankName('');
    setUserAccountNumber('');
    setBankCode('');
    setAmount(null);
    setAccountName('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        hasBackButton
        headerTitle="Funds Transfer"
        onPressLeftIcon={() => navigation.goBack()}
      />

      <View style={styles.bodyContainer}>
        <View style={styles.amountTextContainer}>
          <CurrencyInput
            onChangeValue={(value: number) => setAmount(value)}
            delimiter=","
            separator="."
            placeholder="e.g 3000"
            value={amount}
            placeholderTextColor={colors.lightGrey}
            precision={1}
            style={styles.amountInput}
            returnKeyType="done"
          />
        </View>
        <CustomPicker
          value={bankName}
          navigation={() => navigation.navigate('Modal', { handler: handle })}
        />
        <FormTextInput
          placeholder="Enter Account number"
          onChangeText={(text: string) => setAccountNumber(text)}
          isLoading={loading}
          maxLength={10}
          keyboardType="numeric"
        />
        <FormTextInput editable={false} placeholder="Account Name" value={accountName} />
      </View>
      <LongButton title="Continue" onPress={() => verification()} />
    </SafeAreaView>
  )
}

export default SendMoney;