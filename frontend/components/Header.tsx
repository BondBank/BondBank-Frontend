import Link from 'next/link';
import Menu from './Menu';

type MenuOptions = Array<{ name: string; link: string }>;
type MenuItem = { title: string; options: MenuOptions };
type MenuItemList = Array<MenuItem>;

// Example menu items for dropdown menu
const menuItem: MenuItem = {
  title: 'Learn',
  options: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Create Bond',
      link: '/bondCreatorUI',
    },
    {
      name: 'Buy Bonds',
      link: '/manageBondsUI',
    },
  ],
};

const menuItems: MenuItemList = [menuItem, menuItem, menuItem];

const Header = () => {
  // const [navLinkSelected, setNavLinkSelected] = useState(true)

  return (
    <nav className="header">
      <h1 className="logo">BondBank Dapp - dev version</h1>
      <div className="navigation">
        <Link href="/">
          <a className="navLink navLinkSelected">Home</a>
        </Link>

        <Menu menuName="Test Menu" menuItems={menuItems} />

        <Link href="/About">
          <a className="navLink">About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
