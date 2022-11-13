import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

import Link from 'next/link'
import {useEffect, useState} from 'react'  






// <input type="text" onChange={(e) => setSearchText(e.target.value)} />
function viewAllBonds(){


  const [allBondIds,setAllbondIds] = useState([])
  const [bondObjs,setbondObjs] 
  = useState([{bondName:"t",bondStartDate:"e",
            bondMaturityDate:"s",BondManager:"t",
            Altcoinswap:"y",buyers:[]}])

    async function fetchAllBonds() {
    
   
        try {
          // If the caller has set the `contract` boolean to true, retrieve the balance of
          // ether in the `exchange contract`, if it is set to false, retrieve the balance
          // of the user's address
          let signer = '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5';
          

  
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer12 = await provider.getSigner();

            const signerAddr = await signer12.getAddress();
    console.log(`signer12---${signer12}`)
    console.log(`signerAddr---${signerAddr}`)
            
            const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer12);
            
  
       
       const t = await erc20.getAllBonds()
       console.log(t)
       console.log('------------------')

       console.log(t[0].toString())
       console.log('------------------')
       console.log(t[1].toString())
       console.log('------------------')

       console.log(t[0].toString())
       console.log(t[1].toString())
       setAllbondIds(t);
       setbondObjs(t);
       
       
       
       console.log('%%%%%%%%%%%%%%%%--')

       console.log(bondObjs[0]) //{ar0: 't', ar1: 'e', ar2: 's', ar3: 't', ar4: 'y'}
       console.log('%%%%%%%%%%%%%%%%--')
       console.log(bondObjs[1])    //undefined
       console.log('%%%%%%%%%%%%%%%%--')
       console.log(bondObjs[2]) //undefined
       
      //  bondObjs.push(
      //   {t[0].bondName,
      //    t[0].bondStartDate.toString(),
      //   });
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
       

        // (currentBondId, bondName,bondMaturityDate,bondUnitPrice,event) => 
        //     {
        //         console.log(`----`),console.log({currentBondId,  bondName,bondMaturityDate,bondUnitPrice,event}),
        //         console.log(`+++`)});

            
         
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
           <button className="cta-button connect-wallet-button" onClick={() => fetchAllBonds()}>get all Bonds</button>
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



