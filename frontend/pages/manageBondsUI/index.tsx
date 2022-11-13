import Link from 'next/link'
import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";



import {useEffect, useState} from 'react'  

function manageBondsUI(){
    const [allBondIds,setAllbondIds] = useState([])
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

       setAllbondIds(t);
 
       

       

        // (currentBondId, bondName,bondMaturityDate,bondUnitPrice,event) => 
        //     {
        //         console.log(`----`),console.log({currentBondId,  bondName,bondMaturityDate,bondUnitPrice,event}),
        //         console.log(`+++`)});

            
         
        } catch (err) {
          console.error(err);
          
        }
  }

    return (
        <div>
            <h1><a className="footer-text">Manage Bonds</a></h1>
            <div >
                    <div>
                    <Link href='/'>Back</Link>
                    </div>
                    <br></br>
                
                    <div><Link href='/buyBond'>Buy a Bond (click here)</Link></div>
                    <br></br>
                    <div><Link href='/redeemBond'>Redeem a Bond (click here)</Link></div>
                    <br></br>
                    <div><Link href='/'>View My Bonds (future use)</Link></div>
                    <br></br>
                    <div><button className="cta-button connect-wallet-button" onClick={() => fetchAllBonds()}>View All Bonds</button></div>
                    <br></br>
                    <div>
                    <h3>-------------------------------------</h3>
                    </div>
                    <div>
                            { 
                                    allBondIds.map((employee, index) => {
                                                        return (
                                                            <div key={index}>
                                                            <h4>{employee.toString()}</h4>

                                                            </div>
                                                        );
                                                    })
                            }
                    </div>
           
            </div>
            
        </div>
    );
}
export default manageBondsUI;

function callMintFunction(): void {
    throw new Error("Function not implemented.");
}
