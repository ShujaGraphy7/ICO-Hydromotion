import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@rainbow-me/rainbowkit/styles.css";

import {
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  hardhat,
  polygonMumbai,
} from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [polygonMumbai, mainnet, polygon, optimism, arbitrum, goerli, hardhat ],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Hydromotion Presale",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WagmiConfig client={wagmiClient}>
    <React.StrictMode>
      <RainbowKitProvider
        chains={chains}
        modalSize={{
          smallScreen: "compact",
          largeScreen: "wide",
        }}
        theme={lightTheme({
          accentColor: "#65A30D",
          accentColorForeground: "white",
          overlayBlur: "large",
          borderRadius: "large",
        })}
      >
        <App />
      </RainbowKitProvider>

    </React.StrictMode>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
