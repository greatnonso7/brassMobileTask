import AsyncStorage from "@react-native-async-storage/async-storage";
import createRematchPersist from '@rematch/persist';
import { AllFilters } from '../filters';

const blacklist:[] = [];

export const persistPlugin = createRematchPersist({
  key: 'root',
  blacklist,
  version: 2,
  storage: AsyncStorage,
  transforms: AllFilters,
})