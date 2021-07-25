import "./MetamaskWalletConnection.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { login } from "../../actions"

const MetamaskWalletConnection = () => {
  const isLogged = useSelector(state => state.isloggedWithMetamask)
  const dispatch = useDispatch()

  const connectWallet = () => {
    if (isLogged === false) {
      dispatch(login())
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
