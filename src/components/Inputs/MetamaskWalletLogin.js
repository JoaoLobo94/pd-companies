import "./MetamaskWalletConnection.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions";

const MetamaskWalletConnection = () => {
  const dispatch = useDispatch();

  const connectWallet = async () => {
    if (typeof window.ethereum == "undefined") {
      console.log("Please install metamask");
    }
    if (window.ethereum.isMetaMask) {
      //TODO Implement connect wallet if unconected not just unlock
      if ((await window.ethereum._metamask.isUnlocked()) === false) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        dispatch(login());
        loginUser();
      } else {
        loginUser();
      }
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
