import ApiHandler from "../ApiHandler";

export default {
  fetchBankData: () => ApiHandler.get('/banks/NG'),
}