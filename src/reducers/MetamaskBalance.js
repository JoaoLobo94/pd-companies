const Web3 = require("web3");
const MetamaskBalances = (state = "", action) => {
  return async (dispatch) => {
    switch (action.type) {
      case "BALANCE":
        const web3 = new Web3(Web3.givenProvider);
        const accounts = await web3.eth.getAccounts();
        const balances = {};
        accounts.asyncforEach(async (account) => {
          const balance = await web3.eth.getBalance(account);
          balances[account] = balance;
        });
        return (state = balances);
      default:
        return state;
    }
  };
};

export default MetamaskBalances;
