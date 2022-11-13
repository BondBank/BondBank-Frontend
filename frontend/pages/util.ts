const { Contract, ethers } = require("ethers");

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../constants";

const i_createBond = async () => {
    try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer12 = await provider.getSigner();
        const signerAddr = await signer12.getAddress();
        console.log(`signer12---${signer12}`)
        console.log(`signerAddr---${signerAddr}`)
        
        const erc20 
        = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,
            CreateBondandAdminRole_CONTRACT_ABI,signer12);
        
            return erc20;
        } catch (err) {
            console.error(err);
            
        }
}
