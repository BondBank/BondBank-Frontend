import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Header.module.css';
// import Menu from './Menu';

// type MenuOptions = Array<{ name: string; link: string }>;
// type MenuItem = { title: string; options: MenuOptions };
// type MenuItemList = Array<MenuItem>;

// // Example menu items for dropdown menu
// const menuItem: MenuItem = {
//   title: 'Learn',
//   options: [
//     {
//       name: 'Home',
//       link: '/',
//     },
//     {
//       name: 'Create Bond',
//       link: '/bondCreatorUI',
//     },
//     {
//       name: 'Buy Bonds',
//       link: '/manageBondsUI',
//     },
//   ],
// };

// const menuItems: MenuItemList = [menuItem, menuItem, menuItem];

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.main}>
        <h1 className={styles.logo}>BondBank Dapp - dev version</h1>
        <div className={styles.navigation}>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>

          {/* <Menu menuName="Test Menu" menuItems={menuItems} /> */}

          <Link href="/bondCreatorUI">
            <a className={styles.navLink}>Create Bond</a>
          </Link>

          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </div>
      </div>

      <ConnectButton />
    </nav>
  );
};

export default Header;
