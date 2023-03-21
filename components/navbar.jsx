import Link from 'next/link';

const Navbar = () => (
  <nav>
    <div className="links">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
    </div>
  </nav>
);

export default Navbar;
