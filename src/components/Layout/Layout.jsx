import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => (
  <>
  	<Navbar />
  	{children}
  </>
);


export default Layout;