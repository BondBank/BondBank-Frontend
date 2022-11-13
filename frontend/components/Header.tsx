import { Typography } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="header">
      {/* Maybe we don't need the logo to be clickable since we have Home Nav already? */}
      {/* <Link href="/" className="logo"> */}
      <Typography variant="h5">BondBank Dapp - dev version</Typography>
      {/* </Link> */}
      <div className="navigation">
        <Link href="/">
          <a className="link-nav">Home</a>
        </Link>

        <Link href="/About">
          <a className="link-nav">About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
