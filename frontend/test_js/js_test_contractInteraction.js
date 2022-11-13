const getBuyandRedeemBondsContractInstance 
= require('./js_contractInteraction')

// import {contractInteraction}  from './js_contractInteraction'


async function test_contractInteraction(){

    const createBond = await contractInteraction();
    try {
          
        let own = '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5';
        if (true) {
        console.log('----');
        const t = await createBond.adminrole(own)
        console.log(t);
      //   .then(console.log(own))
      //   .else(console.log('nothing'))
        } else {
        
        }
    } catch (e) {
        console.error('$$$$$$$$$$$$');
        console.error(e);
        
    }

}
