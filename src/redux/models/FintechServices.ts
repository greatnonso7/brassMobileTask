import { reducerActions as reducers } from './reducer';
import { ApiServices } from '../../services/apis';

const IsState = {
  banks: [],
  transactions: [],
  token: 'FLWSECK_TEST-SANDBOXDEMOKEY-X',
  // token: 'FLWSECK_TEST-f107670bee2e274404cbeee7657d92ef-X'
}

export const FinTechServices = {
	name: 'FinTechServices',
	state: IsState,
	reducers,
	effects: (dispatch: { FinTechServices: { setError: (arg0: boolean) => void; setState: (arg0: { banks?: any; transactions?: any; }) => void; }; }) => ({
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
    
    async makeTransfer(data: any, state: any) {
      dispatch.FinTechServices.setError(false);

      try {
        const api = await ApiServices.sendMoney(data);

        if (api) {
          return true;
        }

      } catch (error) {
        this.handleError(error)  
      }
    },

    async verifyAccountNumber(data: any, state: any) {
      dispatch.FinTechServices.setError(false);

      try {
        const api = await ApiServices.nameEnquiry(data);

        if (api) {
          const data = JSON.parse(JSON.stringify(api)).data
          return data;
        }
      } catch (error) {
        this.handleError(error)
      }
    },

    async fetchTransactions(_: any, state: any) {
      dispatch.FinTechServices.setError(false);

      try {
        const api = await ApiServices.fetchUserTransactions();

        if (api) {
          dispatch.FinTechServices.setState({
            transactions: JSON.parse(JSON.stringify(api)).data,
          })
        }
      } catch (error) {
        this.handleError(error)
      }
    },

    async fetchMoreTransactionsData(data: any, state: { FinTechServices: { transactions: any; }; }) {
      dispatch.FinTechServices.setError(false);

      try {
        const api = await ApiServices.fetchMoreTransactions(data);

        if (api) {
          const newTransactions = JSON.parse(JSON.stringify(api)).data
          dispatch.FinTechServices.setState({
            transactions: [
              ...state.FinTechServices.transactions,
              ...newTransactions,
            ],
          });

          return true;
        }
      } catch (error) {
        this.handleError(error);
      }
    },
		
		async handleError(error: any) {
      dispatch.FinTechServices.setError(true);

      if (error?.includes('undefined')) {
        console.log(error);
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