import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LongButton from '../../shared/button';
import CustomPicker from '../../shared/custom-picker';
import HeaderBar from '../../shared/header-bar';
import FormTextInput from '../../shared/text-input';
import { styles } from './style';

const SendMoney = ({ navigation }: any) => {
  const [bankName, setBankName] = useState<string>();
  const [bankCode, setBankCode] = useState<string>();
  const [amount, setAmount] = useState<string>();

  const handle = (data: { bankName: string; bankCode: string }) => {
    if (!data) return;
    setBankName(data.bankName);
    setBankCode(data.bankCode);
  };

  const formatMoney = async (text: string) => {
    console.log(text?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));

  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Funds Transfer" onPressLeftIcon={() => navigation.goBack()} />

      <View style={styles.bodyContainer}>
        <FormTextInput
          value={amount}
          placeholder="e.g 3000"
          onChangeText={(text: string) => formatMoney(text)}
        />
        <CustomPicker
          value={bankName}
          navigation={() => navigation.navigate('Modal', { handler: handle })}
        />
        <FormTextInput placeholder="Enter Account number" />
        <FormTextInput placeholder="Account Name" />
      </View>

      <LongButton title="Continue" onPress={() => navigation.navigate('ConfirmAmount')} />
    </SafeAreaView>
  )
}

export default SendMoney;