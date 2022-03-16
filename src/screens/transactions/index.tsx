import React, { useEffect, useState } from "react";
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

  const [activePage, setActivePage] = useState<number>(1);

  const { FinTechServices: { fetchTransactions, fetchMoreTransactionsData } } = useDispatch();

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    fetchMoreTransactionsData(activePage);
  }, [activePage])

  const transactions = useSelector((state: RootState) => state.FinTechServices.transactions);

  const fetchMoreTransactions = async () => {
    setActivePage(activePage + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar hasBackButton headerTitle="Transactions" onPressLeftIcon={() => navigation.goBack()} />
      <FlatList
        contentContainerStyle={{ paddingBottom: hp(100) }}
        data={transactions}
        onEndReachedThreshold={0.01}
        onEndReached={fetchMoreTransactions}

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