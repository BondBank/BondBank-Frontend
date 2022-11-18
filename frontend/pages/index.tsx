import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { BigNumber } from 'ethers';
import { useAccount, useContractRead } from 'wagmi';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import ListItem from '../components/ListItem';
import ConnectTips from '../components/ConnectTips';
import styles from '../styles/Home.module.css';

import {
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from '../constants';

const Home: NextPage = () => {
  const { address, isDisconnected } = useAccount();
  const [bondList, setBondList] = useState([]);
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

  type ContractBondItem = [string, BigNumber, string, BigNumber, string[]];
  type BondItem = {
    bondName: string;
    bondManager: string;
    bondMaturityDate: string;
    bondStartDate: string;
    buyers: string[];
  };

  const {
    data: bondListData,
    isLoading: isBondListLoading,
  }: { data: any; isLoading: boolean } = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getAllBonds',
    enabled: !isDisconnected,
  });

  console.log(bondListData);

  useEffect(() => {
    if (!isDisconnected && bondListData) {
      const newBondList = bondListData.map(
        ([
          bondName,
          bondStartDate,
          bondMaturityDate,
          BondManager,
          buyers,
        ]: ContractBondItem) => {
          const startDateObj = new Date(bondStartDate.toNumber() * 1000);
          const startDate = dayjs(startDateObj).format('YYYY-MM-DD hh:mm:ss');

          return {
            bondName,
            bondManager: BondManager,
            bondMaturityDate: bondMaturityDate.toString(),
            bondStartDate: startDate,
            buyers,
          };
        }
      );
      // console.log(newBondList);
      setBondList(newBondList);
    }
  }, [isDisconnected, bondListData]);

  return (
    <div className={styles.container}>
      {/* Show / hide welcome section v.s. bond list view based on wallet connection state */}
      {isDisconnected ? (
        /* Connect Tips - Wallet Not Connected */
        <ConnectTips />
      ) : (
        /* Bond List View - Wallet Connected */
        bondList.length && (
          <>
            <div className="pageTitle">Available Bonds</div>
            {bondList.map((item: BondItem, index) => {
              const {
                bondName,
                bondManager,
                bondMaturityDate,
                bondStartDate,
                buyers,
              } = item;
              // Get user address from Metamask or RainbowKit ConnectButton
              // If user address not in buyers list, show Buy button
              const userAddress = address && address.toString();
              const showBuyButton = !buyers.includes(userAddress!);

              return (
                <ListItem
                  key={index}
                  bondId={index}
                  bondName={bondName}
                  bondManager={bondManager}
                  bondMaturityDate={bondMaturityDate}
                  bondStartDate={bondStartDate}
                  showBuyButton={showBuyButton}
                />
              );
            })}
          </>
        )
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
