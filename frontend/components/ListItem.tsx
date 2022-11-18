import styles from '../styles/ListItem.module.css';
import { Button } from '@mui/material';
import AccessAlarmsTwoToneIcon from '@mui/icons-material/AccessAlarmsTwoTone';

import { Contract, ethers } from "ethers";
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../constants";


const truncateAddress = (address: string): string => {
  if (!address) {
    console.error(`>>>>>> Address is ${address}`);
    return '';
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const ListItem = ({
  bondId,
  bondName,
  bondManager,
  bondMaturityDate,
  bondStartDate,
  showBuyButton,
}: {
  bondId: number;
  bondName: string;
  bondManager: string;
  bondMaturityDate: string;
  bondStartDate: string;
  showBuyButton: boolean;
}) => {
  const handleBuy = async (bondId: number) => {
    // handle buy button click
    console.log('>>>>>>', bondId);
    try{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer12 = await provider.getSigner();
      
      const erc20 
      = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,
          CreateBondandAdminRole_CONTRACT_ABI,signer12);
      
          const fee = ethers.utils.parseEther('0.001')
          
       const t = await erc20.buybond(bondId, {value: fee});
       console.log('--buyBondEnded--');
       console.log(t)
       console.log('--buyBondEnded-->>>>>');
      } catch (err) {
          console.error(err);
          
      }
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <div className={styles.bondName}>{bondName}</div>
        <div className={styles.bondManager}>
          <span className={styles.managerLabel}>Manager</span>
          <span className={styles.infoTxt}>{truncateAddress(bondManager)}</span>
        </div>
        <div className={styles.bondStartDate}>
          <span className={styles.startDateLabel}>Started at</span>
          <span className={styles.infoTxt}>{bondStartDate}</span>
        </div>
        <div className={styles.bondMaturityDate}>
          <span className={styles.matureDateLabel}>Due in</span>
          <span className={styles.infoTxt}>{bondMaturityDate} days</span>
        </div>
      </div>

      {showBuyButton && (
        <Button
          variant="contained"
          className={styles.buyButton}
          onClick={() => handleBuy(bondId)}
        >
          Buy
        </Button>
      )}
    </div>
  );
};

export default ListItem;
