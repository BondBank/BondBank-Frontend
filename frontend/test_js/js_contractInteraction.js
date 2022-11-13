const { Contract, ethers } = require("ethers");
// const {
//     CreateBondandAdminRole_CONTRACT_ADDRESS,
//     BuyandRedeemBondsInstance_CONTRACT_ADDRESS,
//     ReturnBondInfo_CONTRACT_ADDRESS,
//     BuyandRedeemBondsInstance_CONTRACT_ABI,
//     ReturnBondInfo_CONTRACT_ABI,
//     CreateBondandAdminRole_CONTRACT_ABI
// }  = require("../constants");

const CreateBondandAdminRole_CONTRACT_ADDRESS = "0xeE1aC1468dB9362c992B218F301BaB0f4eF34660"

let BuyandRedeemBondsInstance;
let CreateBondandAdminRoleInstance;
let ReturnBondInfoInstance;

async function contractInteraction(){
    try {
        // If the caller has set the `contract` boolean to true, retrieve the balance of
        // ether in the `exchange contract`, if it is set to false, retrieve the balance
        // of the user's address
        let own = '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5';
  
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer1 = await provider.getSigner();
        const signerAddr = await signer1.getAddress();

        
        const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,
            CreateBondandAdminRole_CONTRACT_ABI,signer1);
        
              try {
          
                  
                  if (true) {
                  console.log('----');
                  const t = await erc20.adminrole(own)
                  console.log(t);
                //   .then(console.log(own))
                //   .else(console.log('nothing'))
                  } else {
                  
                  }
                  return erc20;
              } catch (e) {
                  console.error('$$$$$$$$$$$$');
                  console.error(e);
                  
              }
      } catch (err) {
          console.error('-------------------');
        console.error(err);
        
      }
}

module.export = contractInteraction;