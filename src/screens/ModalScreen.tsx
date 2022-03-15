import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../shared/header-bar';
import colors from '../styles/color';

export default function ModalScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar headerTitle='Select Bank' isModal hasRightIcon onPressRightIcon={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
