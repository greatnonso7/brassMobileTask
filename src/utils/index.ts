import EnvDev from '../../env.dev';
import EnvProd from '../../env.prod';
import NetInfo from '@react-native-community/netinfo';
import {store} from '../redux/store';
import { Platform } from 'react-native';


export const getModelKeys = (model: any) =>
  Object.keys(model.effects({})).map((a) => `${model.name}/${a}`);

export const ENV = __DEV__ ? EnvDev : EnvProd; // Environment Management

export const getNetInfo = NetInfo.fetch;

export const getAllModels = () => {
  return store.getState();
};

export const checkInternetInfo = async (allowBroadcast = false) => {
  let state = await getNetInfo();
  if (!state.isConnected && allowBroadcast) {
    state = {...state, errorType: 'NO_INTERNET_ERR'};
  }
  return state;
};

export const isIOS = Platform.OS === 'ios';
    
export const formatAmount = (value: any) => 
  Number(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');  

export const getLettersFromName = (fullname: string | null) => {
  if (fullname === null) {
    return;
  } else {
    const twoLetter = fullname?.split(' ');
    const result = twoLetter?.map(([v]) => v);
    const firstNameLetters = result?.join('');
    return firstNameLetters;
  }
};