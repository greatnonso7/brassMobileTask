import { createFilter } from 'redux-persist-transform-filter';

const FintechServicesFilter = createFilter('FinTechServices', [
  'token',
  'banks',
])


export const AllFilters = [FintechServicesFilter];
