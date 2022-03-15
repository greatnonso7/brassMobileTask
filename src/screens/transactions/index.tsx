import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../shared/header-bar";
import { styles } from "./style";

const Transactions = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Transactions" onPressLeftIcon={() => navigation.goBack()} />
    </SafeAreaView>
  )
}

export default Transactions;