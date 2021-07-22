import "./MetamaskWalletConnection.css";
import { useHistory } from "react-router-dom";

const MetamaskWalletConnection = () => {
  const Web3 = require("web3");
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      new Web3(window.ethereum);
      await window.ethereum.enable();
      loginUser();
    } else {
      loginUser();
    }
  };

  const history = useHistory();

  const loginUser = () => {
    history.push("/userArea");
  };

  return (
    <div>
      <button onClick={connectWallet} id="metamask-button"></button>
    </div>
  );
};

export default MetamaskWalletConnection;
