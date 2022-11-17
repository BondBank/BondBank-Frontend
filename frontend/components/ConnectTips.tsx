import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/ConnectTips.module.css';

const ConnectTips = () => {
  return (
    <div className={styles.container}>
      <h1 className="pageTitle">Welcome to Bond Bank App</h1>
      <div className={styles.description}>
        It enables asset managers to create different bonds using token DAI,
        ETH, BTC, AVAX for now!
      </div>
      <div className={styles.description}>
        This beta app is created for Chainlink hackathon 2022.
      </div>
      <div className={styles.description}>
        Connect a wallet to try Bond Bank!
      </div>
      <ConnectButton />
    </div>
  );
};

export default ConnectTips;
