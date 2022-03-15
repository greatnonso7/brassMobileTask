import ApiHandler from "../ApiHandler";

export default {
  fetchBankData: () => ApiHandler.get('/banks/NG'),
  sendMoney: (data) => ApiHandler.post('/transfers', data)
}