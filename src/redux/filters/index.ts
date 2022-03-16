import { createFilter } from 'redux-persist-transform-filter';

const FintechServicesFilter = createFilter('FinTechServices', [
  'token',
  'banks',
  'transactions'
])


export const AllFilters = [FintechServicesFilter];
