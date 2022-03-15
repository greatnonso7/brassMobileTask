import { reducerActions as reducers } from './reducer';
import { ApiServices } from '../../services/apis';

const IsState = {
	banks: [],
	token: 'FLWSECK_TEST-SANDBOXDEMOKEY-X',
}

export const FinTechServices = {
	name: 'FinTechServices',
	state: IsState,
	reducers,
	effects: (dispatch) => ({
		async fetchBanks(_: any, state: any) {
      dispatch.FinTechServices.setError(false);

			try {
				const api = await ApiServices.fetchBankData();
        if (api) {
          dispatch.FinTechServices.setState({
            banks: JSON.parse(JSON.stringify(api)).data,
          })
        }
			} catch (error) {
				this.handleError(error);
			}
    },
    
    async makeTransfer(data, state) {
      dispatch.FinTechServices.setError(false);

      try {
        const api = await ApiServices.sendMoney(data);
      } catch (error) {
        this.handleError(error)  
      }
    },
		
		async handleError(error: any) {
      dispatch.FinTechServices.setError(true);

      if (error?.status === 401) {
        console.log(error);
        return;
      }

      if (error || error?.data?.errors || error?.data?.status === 'error') {
        var message =
          error?.message ||
          error?.data?.message ||
          'An error occured. Please try again.';
        
         return toast.show(message, {
          type: 'danger',
          duration: 2000
        })
      }
    },
	})
}