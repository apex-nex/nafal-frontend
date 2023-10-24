import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarNafal from '../components/common/header/navbar/Navbar';
import FooterNafal from '../components/common/footer/Footer';

function Layout(props) {
  console.log(props);
  return (
    <>
      {props.location.pathname === '/' ? <NavBarNafal /> : <NavBarNafal />}

      <div>{props.children}</div>
      <FooterNafal />
    </>
  );
}

export default withRouter(Layout);
