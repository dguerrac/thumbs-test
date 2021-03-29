import React from 'react';
import RulingsListProvider from '../RulingsListProvider/RulingsListProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({children}) => (
  <RulingsListProvider>
  	<Navbar />
  	{children}
  	<Footer />
  </RulingsListProvider>
);


export default Layout;