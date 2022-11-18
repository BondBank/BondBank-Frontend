import styles from '../styles/ListItem.module.css';
import { Button } from '@mui/material';
import AccessAlarmsTwoToneIcon from '@mui/icons-material/AccessAlarmsTwoTone';

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
  const handleBuy = (bondId: number) => {
    // handle buy button click
    console.log('>>>>>>', bondId);
    console.log('>>>>>> Buy button clicked!');
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
