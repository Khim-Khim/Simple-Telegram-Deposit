import Layout from "./layout";
import { ToastContainer } from "react-toastify";
import Loader from "./components/LoaderPage/Loader";
import InfoSection from "./components/InfoSection";
import Button from "./components/Button";
import Input from "./components/Input";

import useMetaMask from "./hooks/useMetaMask";

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { useAppKitAccount } from '@reown/appkit/react'

import { AppKitNetwork, defineChain } from '@reown/appkit/networks'
// import { convertHexToNumber } from "./utils/web3";


const projectId = '40cfb7ccf9b42f2c2cf5bd4756da418f'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://reown.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const adilNetwork = defineChain({
  id: 123456,
  caipNetworkId: 'eip155:123456',
  chainNamespace: 'eip155',
  name: 'Adil Devnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ADIL',
    symbol: 'ADIL',
  },
  rpcUrls: {
    default: {
      http: ['https://devnet.adilchain-rpc.io'],
    },
  },
  blockExplorers: {
    default: { name: 'Adil Explorer', url: 'https://devnet.adilchain-scan.io' },
  },
  contracts: {
    // Add the contracts here
  }
})

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [adilNetwork];


// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true 
  }
})

function App() {
  const {
    onConnectDisconnect,
    isLoading,
    isDisabledButtonSendEth,
    onSendTransaction,
    onChangeInput,
    dataTransaction,
  } = useMetaMask();
  const { address, isConnected } = useAppKitAccount();
  // const metaMaskData = useStoreWallet((state: any) => state?.metaMaskData);
  
  // const { balance, wallet } = metaMaskData;


  return (
    <>
      <Layout
        onConnectDisconnect={onConnectDisconnect}
        isAccountConnected={isConnected}
      >
        <div className="flex flex-col items-center lg:items-stretch lg:flex-row">
          <div className="shadow-md py-6 lg:py-10 px-4 lg:px-9 rounded-lg bg-white bg-opacity-50 border-2 border-white w-10/12 lg:w-auto">
            <div className="flex flex-col mt-8">
              <Input
                label="ADIL Token"
                type="number"
                placeholder="0.01"
                maxLength={18}
                step="0.01"
                min="0"
                onChange={(event: any) => onChangeInput(event, "value")}
                value={dataTransaction.value}
              />
              <Button
                label="Deposit ADIL"
                customClass={`mt-1 lg:mt-7 ${
                  isDisabledButtonSendEth
                    ? "!bg-gray-400 hover:!bg-gray-400"
                    : ""
                }`}
                disabled={isDisabledButtonSendEth}
                onClick={onSendTransaction}
              />
              {isDisabledButtonSendEth && (
                <span className="text-xs italic text-red-500 mt-2">
                  *{" "}
                  {isConnected
                    ? "Button disable because the form has not been filled in completely."
                    : "Connect to your wallet before transfer, you can click Connect button."}
                </span>
              )}
              <ToastContainer className="!mb-10 !w-[460px]" />
            </div>
          </div>
          {isConnected && (
            <div className="shadow-md py-6 lg:py-10 px-4 lg:px-8 rounded-lg bg-white bg-opacity-50 border-2 border-white mt-3 lg:mt-0 lg:ml-5 w-10/12 lg:w-auto">
              <InfoSection label="Wallet Adress" value={address || ""} />
              {/* <InfoSection
                label="Balance"
                value={`${convertHexToNumber(balance) || ""} ADIL`}
              /> */}
            </div>
          )}
        </div>
      </Layout>
      {isLoading && <Loader />}
    </>
  );
}

export default App;
