import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

import Link from 'next/link'
import {useEffect, useState} from 'react'  

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { config } from "process";

import { useContractRead } from 'wagmi';
//import { UseContractConfig } from 'wagmi/dist/declarations/src/hooks/contracts/useContractConfig';


// <input type="text" onChange={(e) => setSearchText(e.target.value)} />
function viewAllBonds(){


  const [allBondIds,setAllbondIds] = useState([])
  const [bondObjs,setbondObjs] 
  = useState([{bondName:"t",bondStartDate:"e",
            bondMaturityDate:"s",BondManager:"t",
            Altcoinswap:"y",buyers:[]}])
  const [contract, setcontract] = useState();
  // const contractConfig: UseContractConfig = {
  //   addressOrName: CreateBondandAdminRole_CONTRACT_ADDRESS,
  //   contractInterface: CreateBondandAdminRole_CONTRACT_ABI
  // }
  const funName = ["getAllBonds","getUserCreatedBonds"]
  const {data: tokenURI} = useContractRead({
    
    CreateBondandAdminRole_CONTRACT_ADDRESS,
    CreateBondandAdminRole_CONTRACT_ABI,
    functionName: funName[0]

  });
    async function fetchAllBonds() {
    
   
        try {
          // If the caller has set the `contract` boolean to true, retrieve the balance of
          // ether in the `exchange contract`, if it is set to false, retrieve the balance
          // of the user's address
          
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer12 = await provider.getSigner();
            const signerAddr = await signer12.getAddress();          
            const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer12);
            
            const t = await erc20.getAllBonds()
        
            
            console.log(t)
                if(t.length >0){
                    console.log('------------------')                  
                    setAllbondIds(t);
                    setbondObjs(t);
                    console.log('%%%%%%%%%%%%%%%%--')
                    console.log(bondObjs[0]) //{ar0: 't', ar1: 'e', ar2: 's', ar3: 't', ar4: 'y'}
                    console.log('%%%%%%%%%%%%%%%%--')
                    console.log(bondObjs[1])    //undefined
                    console.log('%%%%%%%%%%%%%%%%--')
                    console.log(bondObjs[2]) 
                    bondObjs.push(
                    t[0].bondName,
                    t[0].bondStartDate,
                    t[0].bondMaturityDate,
                    t[0].BondManager,
                    t[0].Altcoinswap
                    );                
                    console.log('%%%%%%%%%%%%%%%%--')
                    console.log(bondObjs[1]) 
            
                    console.log('%%%%%%%%%%%%%%%%--')
                    console.log(bondObjs[2]) 
            
                    console.log('%%%%%%%%%%%%%%%%--')
                    console.log(bondObjs[3]) 
                    
                    console.log('%%%%%%%%%%%%%%%%--')
                    console.log(bondObjs[4]) 

                } else{
                  console.log('No Bonds found')
                }           
                  
                  } catch (err) {
                    console.error(err);
                    
                  }
            }
  useEffect(()=>{
    
    

  })
  function disp(){
    allBondIds.map((employee, index) => {
      return (
        <div key={index}>
          <h2>name: {employee.toString()}</h2>
          <h2>country: {employee.Id}</h2>

          <hr />
        </div>
      );
    })
  }
    return (
        <div className="container">
           
           <div>
           {/* <button className="cta-button connect-wallet-button" onClick={() => fetchAllBonds()}>get all Bonds</button> */}
           
           </div>
           <h2>List of Available Bonds</h2>
           <h3>-------------------------------------</h3>
           <div>
            { 
                    allBondIds.map((employee, index) => {
                                          return (
                                            <div key={index}>
                                              <h2>{employee.toString()}</h2>

                                            </div>
                                          );
                                       })
            }
           </div>
           <div>
            <h3>-------------------------------------</h3>
            {/*JSON.stringify(allBondIds.toString())*/}
           </div>
           <div>
                <Link href='manageBondsUI'>Back to Manage Bonds</Link>
           </div>
           
        </div>
    );
}
export default viewAllBonds;



