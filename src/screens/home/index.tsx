import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../../shared/header-bar';
import { styles } from './style';
import { Feather, Ionicons } from '@expo/vector-icons';
import colors from '../../styles/color';

const Home = () => {
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
    </SafeAreaView>
  )
}

export default Home;