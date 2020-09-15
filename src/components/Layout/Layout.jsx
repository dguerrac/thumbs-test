import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({children}) => (
  <>
  	<Navbar />
  	{children}
  	<Footer />
  </>
);


export default Layout;