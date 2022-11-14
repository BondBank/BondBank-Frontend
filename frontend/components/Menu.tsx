import styles from '../styles/Menu.module.css';
import Link from 'next/link';
import { useState } from 'react';

type MenuOption = { name: string; link: string };
type MenuOptionList = Array<MenuOption>;

type MenuItem = { title: string; options: MenuOptionList };
type MenuItemList = Array<MenuItem>;

const Menu = ({
  menuName,
  menuItems,
}: {
  menuName: string;
  menuItems: MenuItemList;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const DropdownMenu = ({ menuItems }: { menuItems: MenuItemList }) => {
    return (
      <div className={styles.dropdownMenu}>
        {menuItems.map((item: MenuItem, index) => (
          <div className={styles.dropwdownSection} key={index}>
            <div className={styles.itemTitle}>{item.title}</div>
            {item.options.map((opt: MenuOption, idx) => (
              <Link href={opt.link} key={idx}>
                <a className={styles.itemOption} onClick={closeMenu}>
                  <span>{opt.name}</span>
                  <span
                    className={`${styles.optionArrow} ${styles.right}`}
                  ></span>
                </a>
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={toggleMenu}>
        <span className={styles.buttonName}>{menuName}</span>
        <span
          className={`${styles.arrow} ${isMenuOpen ? styles.up : styles.down}`}
        ></span>
      </div>
      {isMenuOpen && (
        <>
          <div className={styles.dropdownBg} onClick={closeMenu}></div>
          <DropdownMenu menuItems={menuItems}></DropdownMenu>
        </>
      )}
    </div>
  );
};

export default Menu;
