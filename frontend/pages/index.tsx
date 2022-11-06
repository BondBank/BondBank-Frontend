import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {useState} from "react";
import {ethers} from "ethers";
//import { connect } from 'http2';
const tokenIdsMinted =1;
function renderButton(){

}



const Home: NextPage = () => {
  //const [walletAddress, setWalletAddress]; //= useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();
  
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );
  const connectWallet = async () => {};
    /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
    async function connect() {

      if(typeof window.ethereum !== "undefined")
      {
        try{
          await ethereum.request({method: "eth_requestAccounts"});
          setIsConnected(true);
          let connectedProvider = new ethers.providers.Web3Provider(
            window.ethereum
          );
          setSigner(connectedProvider.getSigner());
        } catch(e){
          console.log(e);
        }
      } else{
        setIsConnected(false);
      }
      
        // if (metamask.) {
        //   const response = await metamask.connect();
        //   console.log('Connected with Public Key:', response.publicKey.toString());
        //   setWalletAddress(response.publicKey.toString());
        // }
    }
    async function getAllBonds() {
      
    }

  return (
    <div>
          <Head>
            <title>BondBank</title>
            <meta name="description" content="BondBank-Dapp" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div>
              <h1 className={styles.title}>Welcome to BondBank App</h1>
              <div className={styles.description}>
                Its enables asset managers to create different bonds using token DAI, ETH, BTC, AVAX for now!.
              </div>
              <div className={styles.description}>
                this beta app is created for Chainlink hackathon 2022
              </div>
              {renderNotConnectedContainer()}
            </div>
            {isConnected ? (
              <>
                "Connected!"
                <button className="cta-button connect-wallet-button" onClick={()=> getAllBonds()}>List available bonds</button>
              </>
            ) : (
              <button className="cta-button connect-wallet-button" onClick={()=> connect()}>Connect with Patrick!</button>
            )}
            
            <div>
              $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
            </div>
            <div className="dashboard-card">
            <div className="dashboard-card"><p className="card-title">Backing per $bondToken</p><p className="card-value">$34,964</p></div>
            <div className="dashboard-card"><p className="card-title">Burned $bondToken</p><p className="card-value">$34,964</p></div>
            </div>
            

          <div>
            -------------------------------------------------
          </div>
            <div>
              <img className={styles.image} src="./LW3punks/1.png" />
            </div>
          </div>

          <footer className={styles.footer}>Made with &#10084; by BondBank team</footer>
        </div>

  )
}

export default Home
