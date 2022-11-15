import styles from '../styles/ListItem.module.css';
import { Button } from '@mui/material';
import AccessAlarmsTwoToneIcon from '@mui/icons-material/AccessAlarmsTwoTone';

const ListItem = ({
  name,
  details,
  matureDate,
  showBuyButton,
}: {
  name: string;
  details: string;
  matureDate: string;
  showBuyButton: boolean;
}) => {
  const handleBuy = () => {
    // handle buy button click
    console.log('>>>>>> Buy button clicked!');
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.details}>{details}</div>
        <div className={styles.matureDate}>
          <AccessAlarmsTwoToneIcon color="secondary" />
          <span className={styles.matureDateTxt}>Due on: {matureDate}</span>
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
