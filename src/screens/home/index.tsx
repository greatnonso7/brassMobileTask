import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../../shared/header-bar';
import { styles } from './style';
import { Feather, Ionicons } from '@expo/vector-icons';
import colors from '../../styles/color';
import LongButton from '../../shared/button';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { format, formatDistance, formatRelative, subDays, parseISO } from 'date-fns'
import { sharedImages } from '../../../images';
import { formatAmount } from '../../utils';
import { hp } from '../../shared/responsive-dimension';

const Home = ({ navigation }: any) => {
  const toast = useToast();

  const { FinTechServices: { fetchBanks, fetchTransactions } } = useDispatch();

  const transactions = useSelector((state: RootState) => state.FinTechServices.transactions);

  useEffect(() => {
    fetchBanks();
    fetchTransactions()
  }, [])

  console.log(transactions);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar headerTitle='Wallet' />
      <View style={styles.walletContainer}>
        <View>
          <View style={styles.walletBalanceContainer}>
            <Text style={styles.walletText}>Wallet Balance</Text>
            <TouchableOpacity style={styles.hideBalanceContainer}>
              <Feather name="eye" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.fakeAmount}>$100,930.75</Text>
        </View>
        <View>
          <Ionicons name="md-wallet-outline" size={40} style={styles.walletIcon} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <LongButton
          onPress={() => navigation.navigate('SendMoney')}
          isNotBottom
          buttonStyle={styles.buttonStyle}
          title="Send Money"
          titleStyle={styles.titleStyle}
        />

        <LongButton
          onPress={() => toast.show('Hello world', { type: 'danger', duration: 3000 })}
          isNotBottom
          buttonStyle={styles.buttonStyle2}
          title="Receive Money"
        />
      </View>

      <View style={styles.recentTransactionsContainer}>
        <Text style={styles.recentTransactionsHeaderText}>Recent Transactions</Text>

        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Transactions')}>
          <Text style={styles.viewTransactionsText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: hp(400) }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: hp(100) }}
          data={transactions?.slice(0, 10)}
          renderItem={({ item }) => {
            return (
              <View style={styles.transactionsContainer}>
                <View style={styles.transactionsHeaderContainer}>
                  <Image source={sharedImages.deposit} resizeMode="contain" style={styles.transferIconStatus} />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={styles.fullname}>{item.full_name === 'N/A' ? 'John Doe' : item.full_name}</Text>
                    <Text style={styles.timestamp}>{format(parseISO(item?.created_at), 'MMMM d, yyyy')}</Text>
                  </View>
                </View>
                <Text style={styles.amount}>
                  {item?.currency === 'NGN' ? '₦' : '$'}
                  {formatAmount(item.amount)}
                </Text>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home;