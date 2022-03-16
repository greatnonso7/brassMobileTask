import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
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
  const [userAccountNumber, setUserAccountNumber] = useState<string>();

  const { FinTechServices: { verifyAccountNumber } } = useDispatch();

  const nameEnquiryLoading =
    useSelector((state: RootStateOrAny) =>
      state.loading?.effects?.FinTechServices?.verifyAccountNumber);

  const handle = (data: { bankName: string; bankCode: string }) => {
    if (!data) return;
    setBankName(data.bankName);
    setBankCode(data.bankCode);
  };

  const setAccountNumber = async (accountNumber: string) => {
    if (accountNumber.length === 10 && bankName !== '') {
      console.log('Hello world')
      const data = {
        account_number: accountNumber,
        account_bank: bankCode,
      }
      const res = await verifyAccountNumber(data);
      if (res) {
        setAccountName(res?.account_name);
      }

    } else {
      setUserAccountNumber(accountNumber)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Funds Transfer" onPressLeftIcon={() => navigation.goBack()} />

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
          isLoading={nameEnquiryLoading}
          keyboardType="numeric"
        />
        <FormTextInput editable={false} placeholder="Account Name" value={accountName} />
      </View>

      <LongButton title="Continue" onPress={() => navigation.navigate('ConfirmAmount')} />
    </SafeAreaView>
  )
}

export default SendMoney;