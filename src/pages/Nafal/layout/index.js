import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarNafal from '../components/common/header/navbar/Navbar';
import FooterNafal from '../components/common/footer/Footer';

function Layout(props) {
  console.log(props);
  return (
    <>
      <NavBarNafal />
      <div>{props.children}</div>
      <FooterNafal />
    </>
  );
}

export default withRouter(Layout);
