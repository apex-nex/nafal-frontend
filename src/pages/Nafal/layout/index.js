import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarNafal from '../components/common/header/navbar/Navbar';
import FooterNafal from '../components/common/footer/Footer';
import BackToTop from "../../../components/Layout/backToTop.js";

function Layout(props) {
  return (
    <>
      <NavBarNafal />
      <div style={{width:"100%"}}>{props.children}</div>
      <FooterNafal />
      <BackToTop />
    </>
  );
}

export default withRouter(Layout);
