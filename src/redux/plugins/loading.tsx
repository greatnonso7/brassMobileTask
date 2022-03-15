import createLoadingPlugin from '@rematch/loading';
import { models } from '../models/models';
import { getModelKeys } from '../../utils';


export const loadingPlugin = createLoadingPlugin({
  whitelist: [
    ...getModelKeys(models.FinTechServices),
  ],
})
