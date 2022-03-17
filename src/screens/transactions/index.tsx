import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ListRenderItemInfo, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../shared/header-bar";
import { styles } from "./style";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { hp } from "../../shared/responsive-dimension";
import TransactionsItem from "../../shared/transaction-item";
import { RootState } from "../../redux/store";
import colors from "../../styles/color";


interface ItemData {
  full_name: string;
  currency: string;
  amount: string;
  created_at: string;
}

const Transactions = ({ navigation }: any) => {

  const [activePage, setActivePage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const { FinTechServices: { fetchTransactions, fetchMoreTransactionsData } } = useDispatch();

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    getMoreTransactions();
  }, [activePage]);

  const getMoreTransactions = async () => {
    setLoading(true);
    const api = await fetchMoreTransactionsData(activePage);
    if (api) {
      setLoading(false);
    }
  }

  const transactions = useSelector((state: RootState) => state.FinTechServices.transactions);

  const fetchMoreTransactions = async () => {
    setActivePage(activePage + 1);
  }

  const renderFooter = () => {
    return (
      <View>
        {loading ? (
          <ActivityIndicator
            color={colors.primary}
            style={{ marginTop: hp(5) }}
            size="large"
          />
        ) : null}
      </View>
    );
  };

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
        keyExtractor={(item, index) => item.amount.toString() + index}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  )
}

export default Transactions;