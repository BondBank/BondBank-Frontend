import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

import Link from 'next/link'
import {useEffect, useState} from 'react'  

function buyBond(){
    
    const [bondId, setbondId] = useState()
    const [Bondunits, setBondunits] = useState()
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
            
             erc20.BuyBond(5);
            } catch (err) {
                console.error(err);
                
            }
    }

    return (
        <div>
            <h1><a className="footer-text">Buy Bond</a></h1>
            <div>
                <label>Bond Id :</label>
                
                <input id="bondId" name="bondId" type="text" onChange={(e) => setbondId(e.target.value)}></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Units :</label>
                
                <input id="Bondunits" name="Bondunits" type="text" onChange={(e) => setBondunits(e.target.value)}></input>
                <br/>
            </div>
            <br/>
            
            <button className="cta-button connect-wallet-button" onClick={() => callMintFunction()}>Buy</button>
        </div>
    );
}
export default buyBond;

function callMintFunction(): void {
    throw new Error("Function not implemented.");
}
