import React, { useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../shared/header-bar";
import { styles } from "./style";
import { useDispatch, useSelector } from 'react-redux';
import { hp } from "../../shared/responsive-dimension";
import TransactionsItem from "../../shared/transaction-item";
import { RootState } from "../../redux/store";


interface ItemData {
  full_name: string;
  currency: string;
  amount: string;
  created_at: string;
}

const Transactions = ({ navigation }: any) => {

  const { FinTechServices: { fetchTransactions } } = useDispatch();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const transactions = useSelector((state: RootState) => state.FinTechServices.transactions);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Transactions" onPressLeftIcon={() => navigation.goBack()} />
      <FlatList
        contentContainerStyle={{ paddingBottom: hp(100) }}
        data={transactions?.slice(0, 10)}
        renderItem={({ item }: ListRenderItemInfo<ItemData>) => {
          return (
            <TransactionsItem item={item} />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Transactions;