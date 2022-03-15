import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast, { ToastProvider } from 'react-native-toast-notifications';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { deviceWidth, hp, wp } from './src/shared/responsive-dimension';
import colors from './src/styles/color';
import ToastNotification from './src/shared/toast';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <ToastProvider
            placement="top"
            duration={1500}
            successColor="green"
            dangerColor="red"
            offset={0}
            warningColor="orange"
            normalColor={colors.primary}
            swipeEnabled={true}
            renderType={{
              normal: toast => (
                <ToastNotification
                  text={toast.message}
                  bgColor={colors.primary}
                />
              ),
              danger: toast => (
                <ToastNotification text={toast.message} bgColor={colors.red} />
              ),
              success: toast => (
                <ToastNotification
                  text={toast.message}
                  bgColor={colors.green}
                />
              ),
            }}
          >
            <StatusBar />
            <Navigation colorScheme={colorScheme} />
            {/* <Toast
            style={{
              paddingVertical: hp(16),
              paddingHorizontal: wp(24),
              borderRadius: hp(10),
              flexShrink: 1,
              marginBottom: 80,
              justifyContent: 'center',
              alignItems: 'center',
              width: deviceWidth,
            }}
            offset={0}
            offsetTop={0}
            offsetBottom={0}
            textStyle={{
              color: '#fff',
              fontFamily: 'Recoleta-Regular',
              fontSize: 14,
              alignSelf: 'center',
            }}
            placement="bottom"
            //@ts-ignore
            ref={ref => (global['toast'] = ref)}
          /> */}
          </ToastProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
