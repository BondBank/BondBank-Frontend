

import { ethers, Contract } from 'ethers';
import {useState} from 'react'
import Link from 'next/link'
import {
 
    CreateBondandAdminRole_CONTRACT_ABI,
    CreateBondandAdminRole_CONTRACT_ADDRESS,
  } from "../../constants";
  
function bondCreatorUI(){
    const [adminFlag, setAdminFlag] = useState(false);
    
    const handleNav = () =>{
        
        if(adminFlag)
        {
            return (<div> 
              
              <Link href='/createBond'>Create a New Bond</Link>
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
                     
                       erc20.adminrole(own)
                       .then((e1)=>{setAdminFlag(e1), console.log(`prom-${e1}`)});

                       
                      //setAdminFlag(await erc20.adminrole(own));
                      console.log(`adminFlag-after=${adminFlag}`);
                      setAdminFlag(false);
                      console.log(`after2222=${adminFlag}`);
                    //   .then(console.log(own))
                    //   .else(console.log('nothing'))
                      
                  } catch (e) {
                      console.error('$$$$$$$$$$$$');
                      console.error(e);
                      
                  }
          } catch (err) {
              console.error('-------------------');
            console.error(err);
            
          }
    }
    async function assign_AdminRole() {
        try {
            // If the caller has set the `contract` boolean to true, retrieve the balance of
            // ether in the `exchange contract`, if it is set to false, retrieve the balance
            // of the user's address
            let own = '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5';
      
         
      
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer1 = await provider.getSigner();
            const signerAddr = await signer1.getAddress();
            console.log(`signerAddr---${signerAddr}`);
                // const listAccounts = (await provider.listAccounts());
                // console.log(`listAccounts`)
                // console.log(listAccounts)
           // const account1=(await provider.listAccounts())[0];
         //   const account2=(await provider.listAccounts())[1];
         //   console.log(`account1---${account1}`);
           // console.log(`account2---${account2}`);
    
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
                    //   .then(console.log(own))
                    //   .else(console.log('nothing'))
                      } else {
                      
                      }
                  } catch (e) {
                      console.error('$$$$$$$$$$$$');
                      console.error(e);
                      
                  }
          } catch (err) {
              console.error('-------------------');
            console.error(err);
            
          }
       
    }

    
    return (
        <div>
            <h1><a className="footer-text">Buy Bond</a></h1>
            <div>
            <button className="cta-button connect-wallet-button" onClick={() => assign_AdminRole()}>Assign Admin Role</button>                
            <button className="cta-button connect-wallet-button" onClick={() => check_if_adminRole_isPresent()}>Check</button>
            </div>
            <div>
                    
                  <div>{handleNav()}</div>
                    <div>
                    
                    <Link href='/'>Back</Link>
                    </div>
             </div>
            <br/>
            
            
        </div>
    );
}
export default bondCreatorUI;



