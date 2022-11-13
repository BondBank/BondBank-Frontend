import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import { Router } from 'next/router';
import Link from 'next/link';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//import { connect } from 'http2';
const tokenIdsMinted = 1;
function renderButton() {}

const Home: NextPage = () => {
  //const [walletAddress, setWalletAddress]; //= useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();

  const renderNotConnectedContainer = () => (
    <Button variant="contained" className="button" onClick={connectWallet}>
      Connect to Wallet
    </Button>
  );

  const registerAsAdmin = () => (
    <Button href="/registerAsAdmin" className="button">
      Register as BondCreator / Admin (click here)
    </Button>
  );

  const registerAsBondBuyer = () => (
    <Button href="/registerAsBondBuyer" className="button">
      {' '}
      Register as BondBuyer (click here)
    </Button>
  );

  const bondBuyerUI = () => (
    <Button href="/manageBondsUI" className="button">
      Buy Bond
    </Button>
  );
  const bondCreatorUI = () => (
    <Button href="/bondCreatorUI" className="button">
      Create Bond
    </Button>
  );

  const connectWallet = async () => {};
  /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setSigner(connectedProvider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  async function getAllBonds() {}

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.welcomeSection}>
          <h1 className={styles.title}>Welcome to BondBank App</h1>
          <div className={styles.description}>
            Its enables asset managers to create different bonds using token
            DAI, ETH, BTC, AVAX for now!
          </div>
          <div className={styles.description}>
            This beta app is created for Chainlink hackathon 2022.
          </div>
          {renderNotConnectedContainer()}
        </div>

        {/* <h2>Registration Section</h2>
          <div>{registerAsAdmin()}</div>
          <div>{registerAsBondBuyer()}</div> */}

        <Card sx={{ minWidth: 450 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Login Section
            </Typography>
            <Typography variant="body2" sx={{ mt: 1.5 }}>
              Some description of the login section
            </Typography>
          </CardContent>
          <CardActions>
            <div>{bondCreatorUI()}</div>
            <div>{bondBuyerUI()}</div>
          </CardActions>
        </Card>

        {/* <div className={styles.grid}>
          <div>
            <a href="/bondCreatorUI" className={styles.card}>
              <h2>Bond Creator UI &rarr;</h2>
              <p>Create new Bonds.</p>
            </a>
          </div>
        </div> */}
      </div>

      {/* <div>
        <img className={styles.image} src="1.png" />
      </div>
      <div>if time permits we will implement below functionalities </div>
      <div className="dashboard-card">
        <div className="dashboard-card">
          <p className="card-title">Backing per $bondToken</p>
          <p className="card-value">$34,964</p>
        </div>
        <div className="dashboard-card">
          <p className="card-title">Burned $bondToken</p>
          <p className="card-value">$34,964</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
