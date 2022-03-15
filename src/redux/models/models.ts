import { Models } from '@rematch/core'
import { FinTechServices } from './FintechServices';

export interface RootModel extends Models<RootModel> {
	FinTechServices: typeof FinTechServices
}

export const models: RootModel = { FinTechServices }
