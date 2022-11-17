import styles from '../styles/ListItem.module.css';
import { Button } from '@mui/material';
import AccessAlarmsTwoToneIcon from '@mui/icons-material/AccessAlarmsTwoTone';

const ListItem = ({
  bondId,
  bondManager,
  bondMaturityDate,
  bondStartDate,
  showBuyButton,
}: {
  bondId: number;
  bondManager: string;
  bondMaturityDate: string;
  bondStartDate: string;
  showBuyButton: boolean;
}) => {
  const handleBuy = () => {
    // handle buy button click
    console.log('>>>>>> Buy button clicked!');
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <div className={styles.bondId}>{bondId}</div>
        <div className={styles.bondManager}>
          <span className={styles.managerLabel}>Manager</span>
          <span className={styles.infoTxt}>{bondManager}</span>
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
          onClick={handleBuy}
        >
          Buy
        </Button>
      )}
    </div>
  );
};

export default ListItem;
