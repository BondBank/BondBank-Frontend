import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type { AppProps } from 'next/app';
import Head from 'next/head';
//import {Web3ReactProvider} from ''

import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';


import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
//import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
//

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: 'FV2iJUUiDrWhIRvvrDLwfmWoNOxFcx6X' }),
    publicProvider(),
  ]
);
/*[
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),//
    publicProvider(),
  ]*/
const { connectors } = getDefaultWallets({
  appName: 'NFT Marketplace',
  chains,
});

const wagmiClient = createClient({
  connectors,
  provider,
  autoConnect: true,
});

// const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: process.env.NEXT_PUBLIC_THE_GRAPH_QUERY_URI,
// });

function MyApp({ Component, pageProps }: AppProps) {
  const { address, isConnected } = useAccount()
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Head>
        <title>BondBank</title>
        <meta name="description" content="BondBank-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(`${isConnected}--process.--${address}`)}
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          {/* <ApolloProvider client={apolloClient}> */}
          <div className="App">
            <div className="container">
              <Header />
                <div className="tipsBox w-4/5">
                  {/* <p className="font-bold text-xl text-center mb-10">{tips}</p> */}
                  <ConnectButton />
                </div>
              <Component {...pageProps} />
              <Footer />
              
            </div>
          </div>
          {/* </ApolloProvider> */}
        </RainbowKitProvider>
      </WagmiConfig>

    </ThemeProvider>
  );
}

export default MyApp;
