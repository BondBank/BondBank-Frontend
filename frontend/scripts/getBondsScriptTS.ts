import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../constants";


async function fetchAllBonds() {

    try { 

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer12 = await provider.getSigner();
        const signerAddr = await signer12.getAddress();
        console.log(`signer12---${signer12}`)
        console.log(`signerAddr---${signerAddr}`)
        
        const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer12);
        

   
   const t = await erc20.getAllBonds()
    
    console.log('------------------')
  console.log(t)
            if(t.length >0){
                // // console.log(t[0].toString())
                console.log('------------------')
                //  console.log(t[1].toString())
                //  console.log('------------------')

                //  console.log(t[0].toString())
                //  console.log(t[1].toString())
                // setAllbondIds(t);
                // setbondObjs(t);
                
                
                
                // console.log('%%%%%%%%%%%%%%%%--')

                // console.log(bondObjs[0]) //{ar0: 't', ar1: 'e', ar2: 's', ar3: 't', ar4: 'y'}
                // console.log('%%%%%%%%%%%%%%%%--')
                // console.log(bondObjs[1])    //undefined
                // console.log('%%%%%%%%%%%%%%%%--')
                // console.log(bondObjs[2]) //undefined
                
                // //  bondObjs.push(
                // //   {t[0].bondName,
                // //    t[0].bondStartDate.toString(),
                // //   });
                // bondObjs.push(
                // t[0].bondName,
                // t[0].bondStartDate,
                // t[0].bondMaturityDate,
                // t[0].BondManager,
                // t[0].Altcoinswap
                
                // );
            
                // console.log('%%%%%%%%%%%%%%%%--')
                // console.log(bondObjs[1]) 

                // console.log('%%%%%%%%%%%%%%%%--')
                // console.log(bondObjs[2]) 

                // console.log('%%%%%%%%%%%%%%%%--')
                // console.log(bondObjs[3]) 
                
                // console.log('%%%%%%%%%%%%%%%%--')
                // console.log(bondObjs[4]) 

            } else{
                console.log('No Bonds found')
            }
 
   

        
     
    } catch (err) {
      console.error(err);
      
    }
}

