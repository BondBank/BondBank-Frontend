import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

import Link from 'next/link'
import {useEffect, useState} from 'react'  
import Router from 'next/router'

const redeemBond = () =>{
    const [bondId, setBondId] = useState('')
    const BacktoBondBuyer = () => {
        Router.push('/bondBuyerUI');
    }
    async function erc(){
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer12 = await provider.getSigner();
            const signerAddr = await signer12.getAddress();
            console.log(`signer12---${signer12}`)
            console.log(`signerAddr---${signerAddr}`)
            
            const erc20 
            = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,
                CreateBondandAdminRole_CONTRACT_ABI,signer12);
            console.log('starting redeeming for "'+bondId+'"');
             erc20.Bondredemption(bondId);
            } catch (err) {
                console.error(err);
                
            }
    }

    return (
        <div>
            <h1><a className="footer-text">Redeem Bond</a></h1>
            <div>
                <label>Bond Id :</label>
                <input id="bondId" type="text" onChange={(e) => setBondId(e.target.value)}></input>                
                <br/>

            </div>
            <br/>   
            <button className="cta-button connect-wallet-button" onClick={() => erc()}>Redeem</button>
            <div>
            <button className="cta-button connect-wallet-button" onClick={() => BacktoBondBuyer()}>Back</button>
            
            </div>
        </div>
    );
}
export default redeemBond;

