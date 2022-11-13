import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type { AppProps } from 'next/app';
//import {Web3ReactProvider} from ''

import Header from '../components/Header';
import Footer from '../components/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div className="container">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
