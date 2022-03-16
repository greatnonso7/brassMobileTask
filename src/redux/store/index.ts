import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from '../models/models';
import { loadingPlugin } from '../plugins/loading';
import { persistPlugin } from '../persist';
 
export const store = init<RootModel>({
	models,
	//@ts-ignore
	plugins: [persistPlugin, loadingPlugin],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
