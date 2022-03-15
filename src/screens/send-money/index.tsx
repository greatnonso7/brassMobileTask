import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LongButton from '../../shared/button';
import CustomPicker from '../../shared/custom-picker';
import HeaderBar from '../../shared/header-bar';
import FormTextInput from '../../shared/text-input';
import { styles } from './style';

const SendMoney = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Funds Transfer" onPressLeftIcon={() => navigation.goBack()} />

      <View style={styles.bodyContainer}>
        <FormTextInput placeholder="e.g 3000" />
        <CustomPicker navigation={navigation} />
        <FormTextInput placeholder="Enter Account number" />
        <FormTextInput placeholder="Account Name" />
      </View>

      <LongButton title="Continue" onPress={() => navigation.navigate('ConfirmAmount')} />
    </SafeAreaView>
  )
}

export default SendMoney;