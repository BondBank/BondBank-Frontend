import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';
//import {Web3ReactProvider} from ''

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="App">
    <div className="container">
      <Link href='/' className="link-nav"><h1>BondBank Dapp - dev version</h1></Link>
      <div>
      <Link href='/' className="link-nav"><h2>Home</h2></Link>
      
      <Link href='/About' className="link-nav"><h2>About</h2></Link>
      </div>
      
      <Component {...pageProps} />
    </div>
  </div>
  )
}

export default MyApp
