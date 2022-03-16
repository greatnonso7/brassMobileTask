import ApiHandler from "../ApiHandler";

export default {
  fetchBankData: () => ApiHandler.get('/banks/NG'),
  sendMoney: (data: any) => ApiHandler.post('/transfers', data),
  nameEnquiry: (data: any) => ApiHandler.post('/accounts/resolve', data),
  fetchUserTransactions: () => ApiHandler.get('/transfers'),
  fetchMoreTransactions:
    (data: any) => ApiHandler.get(`/transfers?page=${data}`)
}