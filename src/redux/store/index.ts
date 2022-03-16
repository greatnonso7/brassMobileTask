import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from '../models/models';
import { persistPlugin } from '../persist';
 
export const store = init<RootModel>({
	models,
	//@ts-ignore
	plugins: [persistPlugin],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
