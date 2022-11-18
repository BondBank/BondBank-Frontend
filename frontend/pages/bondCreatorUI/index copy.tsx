import type { NextPage } from 'next';
//const NextPage = require('next')
import { ethers, Contract } from 'ethers';
import { useState } from 'react';
import Router from 'next/router';
import { useAccount, useContractRead } from 'wagmi';
import { Button } from '@mui/material';
import ConnectTips from '../../components/ConnectTips';
import styles from '../../styles/BondCreatorUI.module.css';
import {
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from '../../constants';

const BondCreatorUI: NextPage = () => {
  const { isDisconnected } = useAccount();
  const [adminFlag, setAdminFlag] = useState(false);

  const createNewBondPage = async () => {
    const res = await check_AdminRole();
    if(res)
    {
      Router.push('/createBond');
    } else {
      Router.push('/createBond');
    }
    
  };

  const { data: isAdminRole } = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'checkIfAddminRoleIsPresent',
    enabled: !isDisconnected,
  });

  console.log('>>>>>> isAdminRole', isAdminRole);
  async function check_AdminRole(): boolean { 
    try {
      // If the caller has set the `contract` boolean to true, retrieve the balance of
      // ether in the `exchange contract`, if it is set to false, retrieve the balance
      // of the user's address

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer1 = await provider.getSigner();
      

      let accounts = await provider.send('eth_requestAccounts', []);
      let account = accounts[0];
      console.log(`account---${account}`);

      provider.on('accountsChanged', function (accounts) {
        account = accounts[1];
        console.log(`accountsChanged--${account}`); // Print new address
      });

      const erc20 = new ethers.Contract(
        CreateBondandAdminRole_CONTRACT_ADDRESS,
        CreateBondandAdminRole_CONTRACT_ABI,
        signer1
      );

      try {
        console.log('----');
        const t = await erc20.checkIfAddminRoleIsPresent();
        console.log(t);
        return t;

      } catch (e) {
        console.error('check_AdminRole()--UnabletoConnectTowallet---');
        console.error(e);
      }
      return false;
    } catch (err) {
      console.error('assign_AdminRole():err----');
      console.error(err);
    }
  }
  async function assign_AdminRole() {
    try {
      // If the caller has set the `contract` boolean to true, retrieve the balance of
      // ether in the `exchange contract`, if it is set to false, retrieve the balance
      // of the user's address

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer1 = await provider.getSigner();
      const signerAddr = await signer1.getAddress();
      console.log(`signerAddr---${signerAddr}`);

      let accounts = await provider.send('eth_requestAccounts', []);
      let account = accounts[0];
      console.log(`account---${account}`);

      provider.on('accountsChanged', function (accounts) {
        account = accounts[1];
        console.log(`accountsChanged--${account}`); // Print new address
      });

      const erc20 = new ethers.Contract(
        CreateBondandAdminRole_CONTRACT_ADDRESS,
        CreateBondandAdminRole_CONTRACT_ABI,
        signer1
      );

      try {
        if (true) {
          console.log('----');
          const t = await erc20.addADMINrole();
          console.log(t);
        } else {
        }
      } catch (e) {
        console.error('assign_AdminRole()--UnabletoConnectTowallet---');
        console.error(e);
      }
    } catch (err) {
      console.error('assign_AdminRole():err----');
      console.error(err);
    }
  }

  return (
    <div className={styles.container}>
      {isDisconnected ? (
        <ConnectTips />
      ) : isAdminRole ? (
        <>
          <h2>You are an administator, start create bonds now!</h2>
          <Button variant="contained" onClick={() => createNewBondPage()}>
            Create New Bond
          </Button>
        </>
      ) : (
        <>
          <h2>
            {`You aren't admin yet, get yourself admin role to start creating
            bonds`}
          </h2>
          <Button variant="contained" onClick={() => check_AdminRole()}>
            Check Assign Admin Role
          </Button>
          <br></br>
          <Button variant="contained" onClick={() => assign_AdminRole()}>
            Assign Admin Role
          </Button>
        </>
      )}
    </div>
  );
};

export default BondCreatorUI;
