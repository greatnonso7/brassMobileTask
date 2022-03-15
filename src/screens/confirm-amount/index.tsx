import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LongButton from '../../shared/button';
import HeaderBar from '../../shared/header-bar';
import { styles } from './style';

const ConfirmAmount = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Confirm Transfer" onPressLeftIcon={() => navigation.goBack()} />

      <LongButton title="Confirm Transfer" />
    </SafeAreaView>
  )
}

export default ConfirmAmount;