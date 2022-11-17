import type { NextPage } from 'next';
import { useState } from 'react';
// import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import { Button } from '@mui/material';
import ListItem from '../components/ListItem';
import ConnectTips from '../components/ConnectTips';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { address, isDisconnected } = useAccount();
  // const [isConnected, setIsConnected] = useState(false);
  // const [provider, setProvider] = useState();

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
  async function getAllBonds() {}

  type BondItem = {
    name: string;
    details: string;
    matureDate: string;
    seller: string;
    buyers: string[];
  };

  type BondList = Array<BondItem>;

  const bondItem: BondItem = {
    name: 'Bond 1',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    matureDate: '2023.02.16',
    seller: '0x123123123123123123123123',
    buyers: [
      '0x456456456456456456456456456456',
      '0x789789789789789789789789789789',
    ],
  };

  const bondList: BondList = [bondItem, bondItem, bondItem];

  return (
    <div className={styles.container}>
      {/* Show / hide welcome section v.s. bond list view based on wallet connection state */}
      {isDisconnected ? (
        /* Connect Tips - Wallet Not Connected */
        <ConnectTips />
      ) : (
        /* Bond List View - Wallet Connected */
        <>
          {bondList.map(({ name, details, matureDate, buyers }, index) => {
            // Get user address from Metamask or RainbowKit ConnectButton
            // If user address not in buyers list, show Buy button
            const userAddress = address && address.toString();
            const showBuyButton = !buyers.includes(userAddress!);

            return (
              <ListItem
                key={index}
                name={name}
                details={details}
                matureDate={matureDate}
                showBuyButton={showBuyButton}
              />
            );
          })}
        </>
      )}
      {/* <h2>Registration Section</h2>
          <div>{registerAsAdmin()}</div>
          <div>{registerAsBondBuyer()}</div> */}

      {/* <div className={styles.grid}>
          <div>
            <a href="/bondCreatorUI" className={styles.card}>
              <h2>Bond Creator UI &rarr;</h2>
              <p>Create new Bonds.</p>
            </a>
          </div>
        </div> */}

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
