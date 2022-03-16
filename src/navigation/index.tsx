/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, LogBox } from 'react-native';
import ModalScreen from '../screens/ModalScreen';
import Home from '../screens/home';
import SendMoney from '../screens/send-money';
import Transactions from '../screens/transactions';
import ConfirmAmount from '../screens/confirm-amount';
import { RootStackParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import SingleTransaction from '../screens/single-transaction';

// LogBox.ignoreLogs([
//   'Non-serializable values were found in the navigation state',
// ]);


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SendMoney" component={SendMoney} options={{ headerShown: false }} />
      <Stack.Screen name="Transactions" component={Transactions} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmAmount" component={ConfirmAmount} options={{ headerShown: false }} />
      <Stack.Screen name="SingleTransaction" component={SingleTransaction} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
