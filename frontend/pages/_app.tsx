import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
// import Profile from '../components/Profile';

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
  appName: 'Bond Bank',
  chains,
});

const wagmiClient = createClient({
  connectors,
  provider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <Head>
          <title>BondBank</title>
          <meta name="description" content="BondBank-Dapp" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <div className="container">
              <Header />
              <Component {...pageProps} />
              <Footer />
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
