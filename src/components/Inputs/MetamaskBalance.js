const MetamaskBalance = () => {
  const Web3 = require("web3");
  const getBalance = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    return balance;
  };
  return <div></div>;
};

export default MetamaskBalance;
