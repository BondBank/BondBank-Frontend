

import { ethers, Contract } from 'ethers';
import {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {
 
    CreateBondandAdminRole_CONTRACT_ABI,
    CreateBondandAdminRole_CONTRACT_ADDRESS,
  } from "../../constants";
  
function bondCreatorUI(){
    const [adminFlag, setAdminFlag] = useState(false);
    const createNewBondPage=()=> {
      Router.push('/createBond');
    }
    const gotoHome=()=> {
      Router.push('/');
    }
    
    const handleNav = () =>{
        
        if(adminFlag)
        {
            return (
            <div>
              <br></br>
              
                  <button className="cta-button connect-wallet-button" onClick={() => bondCreatorUI()}>Create New Bond</button>
              
              <br></br>
            </div>)
        }else{
            return (
            <div> 
              <Link href='/no'><h2>You aren't admin yet, get yourself admin role to start creating bonds</h2></Link>
              <h3>hit 'Check' button twice to check before assign admin</h3>
            </div>)
        }
    }
    async function check_if_adminRole_isPresent(){
        try {
            // If the caller has set the `contract` boolean to true, retrieve the balance of
            // ether in the `exchange contract`, if it is set to false, retrieve the balance
            // of the user's address
            
      
            console.log(CreateBondandAdminRole_CONTRACT_ADDRESS);
            console.log(CreateBondandAdminRole_CONTRACT_ABI);
      
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer1 = await provider.getSigner();
            const signerAddr = await signer1.getAddress();
    
            
            const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer1);
            
                  try {
                    console.log('----');
                    
                      console.log(`adminFlag-before=${adminFlag}`);
                     
                       const valfromContract = await erc20.checkIfAddminRoleIsPresent();
                       
                       setAdminFlag(valfromContract);
                       console.log(`valfromContract-after=${valfromContract}`);
                       console.log(`adminFlag-after=${adminFlag}`);
                      
                  } catch (e) {
                      console.error('check()--UnabletoConnectTowallet---');
                      console.error(e);
                      
                  }
          } catch (err) {
              console.error('check_if_adminRole_isPresent():err----');
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
    
    
            let accounts = await provider.send("eth_requestAccounts", []);
            let account = accounts[0];
            console.log(`account---${account}`);

            provider.on('accountsChanged', function (accounts) {
                account = accounts[1];
                console.log(`accountsChanged--${account}`); // Print new address
            });
    
            
            const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer1);
            
                  try {
              
                      
                      if (true) {
                      console.log('----');
                      const t = await erc20.addADMINrole()
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
        <div>
            <h1><a className="footer-text">Buy Bond</a></h1>
            <div>
            <button className="cta-button connect-wallet-button" onClick={() => assign_AdminRole()}>Assign Admin Role</button>                
            </div>
            <div>
            <button className="cta-button connect-wallet-button" onClick={() => check_if_adminRole_isPresent()}>Check</button>
            </div>
            <div>
                    
                  <div>{handleNav()}</div>
                  <div>
            <button className="cta-button connect-wallet-button" onClick={() => gotoHome()}>Back</button>
            </div>
             </div>
            <br/>
            
            
        </div>
    );
}
export default bondCreatorUI;



/*
 <br></br>
 <div>
    <button className="cta-button connect-wallet-button" onClick={() => goBackToManageBonds()}>Cancel</button
 </div>
 <br></br>
*/