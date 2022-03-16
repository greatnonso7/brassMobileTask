import createLoadingPlugin from '@rematch/loading';
import { FinTechServices } from '../models/FintechServices';
import { getModelKeys } from '../../utils';


export const loadingPlugin = createLoadingPlugin({
  whitelist: [
    ...getModelKeys(FinTechServices),
  ],
})
