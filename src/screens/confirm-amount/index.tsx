import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LongButton from '../../shared/button';
import HeaderBar from '../../shared/header-bar';
import { formatAmount } from '../../utils';
import { styles } from './style';

const ConfirmAmount = ({ navigation, route }: any) => {

  const { amount } = route.params?.data;
  console.log(route.params);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar
        hasBackButton
        headerTitle="Confirm Transfer"
        onPressLeftIcon={() => navigation.goBack()}
      />

      <View style={styles.bodyContainer}>
        <Text style={styles.nairaSign}>₦
          <Text style={styles.amountValue}>{formatAmount(amount)}</Text>
        </Text>
      </View>

      <LongButton title="Confirm Transfer" />
    </SafeAreaView>
  )
}

export default ConfirmAmount;