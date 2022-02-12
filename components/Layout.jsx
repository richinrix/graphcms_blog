import React from 'react';
import Nav from './Nav';
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      {children}
    </React.Fragment>
  );
};

export default Layout;
