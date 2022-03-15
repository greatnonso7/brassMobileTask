import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from '../models/models';
// import { loadingPlugin } from '../plugins';
// import { persistPlugin } from '../persist';
 
export const store = init({
	models,
	// plugins: [loadingPlugin, persistPlugin],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
