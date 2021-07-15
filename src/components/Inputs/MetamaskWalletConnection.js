import './MetamaskWalletConnection.css'
import { useWallet, UseWalletProvider } from "use-wallet";

const MetamaskWalletConnection = () => {
  const wallet = useWallet();
  const connectWallet = async (e) =>{
	 e.preventDefault()
	  await wallet.connect()
  }

  return (
    <div>
      <button onClick={connectWallet} id='metamask-button'></button>
    </div>
  );
};

export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      portis: { provider: window.cleanEtherium },
    }}
  >
    <MetamaskWalletConnection />
  </UseWalletProvider>
);
