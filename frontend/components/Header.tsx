import Link from 'next/link';
import { useState } from 'react';
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

const navList = [
  { link: '/', text: 'Home' },
  { link: '/bondCreatorUI', text: 'Create Bond' },
  { link: '/about', text: 'About' },
];

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <nav className={styles.header}>
      <div className={styles.main}>
        <h1 className={styles.logo}>BondBank Dapp - dev version</h1>
        <div className={styles.navigation}>
          {/* <Menu menuName="Test Menu" menuItems={menuItems} /> */}

          {navList.map((navItem, index) => (
            <Link href={navItem.link} key={index}>
              <a
                className={`${styles.navLink} ${
                  selectedIndex === index ? styles.selected : ''
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {navItem.text}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <ConnectButton />
    </nav>
  );
};

export default Header;
