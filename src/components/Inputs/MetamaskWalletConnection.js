import "./MetamaskWalletConnection.css";
import { useWallet, UseWalletProvider } from "use-wallet";
import { useHistory } from 'react-router-dom'

const MetamaskWalletConnection = () => {
  const wallet = useWallet();
  const connectWallet = async () => {
    if (wallet.status === "connected") {
      loginUser()
    } else {
      await wallet.connect();
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
// eslint-disable-next-line
export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{ portis: { provider: window.cleanEtherium } }}
  >
    <MetamaskWalletConnection />
  </UseWalletProvider>
);
