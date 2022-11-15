import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

import Link from 'next/link'
import {useEffect, useState} from 'react'  
import Router from 'next/router'




// <input type="text" onChange={(e) => setSearchText(e.target.value)} />
function createBond(){
    const [txs, setTxs] = useState([]);
    const [signer1, setsigner1] = useState();
    const [bondId, setbondId] = useState('');
    const [BondName, setBondName] = useState("test9");
const [BondStartDate, setBondStartDate] =  useState("1");
const [BondMaturityDate, setBondMaturityDate] =  useState("30");
const [BondunitPrice, setBondunitPrice] =  useState("0");
const [BondMaximumUnits, setBondMaximumUnits] =  useState("0");
const [BondMaximumAmount, setMaximumAmount] =  useState("0");
    async function learWeb3callCreateBondFunction1(): void {
    
   
        try {
          // If the caller has set the `contract` boolean to true, retrieve the balance of
          // ether in the `exchange contract`, if it is set to false, retrieve the balance
          // of the user's address
          let signer = '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5';
          
          // const exchangeContractProvider = new Contract(
          //     CreateBondandAdminRole_CONTRACT_ADDRESS,
          //     CreateBondandAdminRole_CONTRACT_ABI,
          //     signer
          //   );
  
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer12 = await provider.getSigner();
            //setsigner1(signer12);
            const signerAddr = await signer12.getAddress();
    console.log(`signer12---${signer12}`)
    console.log(`signerAddr---${signerAddr}`)
            
            const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer12);
            
  
          if (true) {
           console.log('----');
           console.log(`BondName-${BondName}`)
           console.log(`BondMaturityDate-${BondMaturityDate}`)
           console.log(`setBondunitPrice-${BondunitPrice}`)
           console.log(`BondMaximumAmount-${BondMaximumAmount}`)

        //    console.log(
        //    );
        erc20.createBond
        (   BondName,
            BondMaturityDate,
            '0xB3865282170A6CFF1132e92c0B62554cc3bcc39B',
            //BondunitPrice, 
            BondMaximumAmount
        )
        let currentBond =0; 
        erc20.on("BondCreated",
        (currentBondId, bondName,bondMaturityDate,bondUnitPrice,event) => 
            {
                console.log(`----`),
                console.log({currentBondId,  bondName,bondMaturityDate,bondUnitPrice,event}),
                currentBond = currentBondId;
                console.log('event')
                console.log(currentBondId.toString())
                console.log(bondName.toString())
                console.log(bondMaturityDate.toString())
                console.log(bondUnitPrice.toString())
                console.log(event)
                console.log(`+++`)
                setbondId(currentBond.toString())
                return <h2>{currentBondId.toString()}</h2>
            }
        );
        
        console.log(currentBond);
            
          } else {
            
          }
        } catch (err) {
          console.error(err);
          
        }
  }
  useEffect(()=>{
    // if(contractInfo.address !== "-"){
    //     const provider
    // }
    
   // const provider = new ethers.providers.Web3Provider(window.ethereum);
   // const signer1 = await provider.getSigner();
    

    
   // const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer1);

    // erc20.on("BondCreated",(currentBondId, bondName,bondMaturityDate,bondUnitPrice,event) => {
    //     console.log({currentBondId,  bondName,bondMaturityDate,bondUnitPrice,event})
        // setBondMaximumUnits((currentTxs)=>[
        //     ...currentTxs,{
        //         txHash: event.transactionHash,
        //         from, to , amount: String(amount)
        //     }
        // ])
    // })
    

  })
  function goBackToManageBonds(){
    Router.push('/bondCreatorUI');
  }
    return (
        <div className="container">
            <h1><a className="footer-text">Create Bond</a></h1>
            <div>
                <label>Bond Name        : </label>
                <input id="BondName" type="text" onChange={(e) => setBondName(e.target.value)}></input>
                <br/>
            </div>
            <br/>
           
            <br/>
            <div>
                <label>Maturity Date    :</label>
                <input id="BondMaturityDate" type="text" onChange={(e) => setBondMaturityDate(e.target.value)}></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>UnitPrice        :</label>
                <input id="BondunitPrice" name="BondunitPrice" type="text" onChange={(e) => setBondunitPrice(e.target.value)}></input>
                <br/>
            </div>
            <br/>
            
            <div>
                <label>Maximum Amount   :</label>
                <input id="BondMaximumAmount" type="text" onChange={(e) => setMaximumAmount(e.target.value)}></input>
                <br/>
            </div>
            <br/>
            <div>
                <button className="cta-button connect-wallet-button" onClick={() => learWeb3callCreateBondFunction1()}>Create</button>
                
            </div>
            <br></br>
            <div>
                <button className="cta-button connect-wallet-button" onClick={() => goBackToManageBonds()}>Cancel</button>
                
            </div>
            <br></br>
           
            <div>
            <h2>Bondid '{bondId}' is created</h2>
                
            </div>
           
        </div>
    );
}
export default createBond;




