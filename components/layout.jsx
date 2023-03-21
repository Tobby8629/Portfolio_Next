import { propTypes } from 'prop-types';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

Layout.propTypes = {
  children: propTypes.string.isRequired,
};

export default Layout;
