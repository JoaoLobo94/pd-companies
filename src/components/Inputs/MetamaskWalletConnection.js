import "./MetamaskWalletConnection.css";
import { useHistory } from 'react-router-dom'

const Web3 = require("web3");
const MetamaskWalletConnection = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      loginUser()
    } else {
      loginUser()
    }
  };
  
  const history  = useHistory()

  const loginUser = () =>{
    history.push("/userArea")
  }

  return (
    <div>
      <button onClick={connectWallet} id="metamask-button"></button>
    </div>
  );
};

export default MetamaskWalletConnection
