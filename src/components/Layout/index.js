import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";
import BackToTop from "./backToTop";
import ThemeSwitcher from "./ThemeSwitcher";
import NavBarNafal from '../../components/navbar/Navbar'
import FooterNafal from '../footer/Footer'

function Layout(props) {
  return (
    <React.Fragment>
      <NavBarNafal />
      <div style={{ width: "100%" }}>{props.children}</div>
      <FooterNafal />
      <BackToTop />
      <ThemeSwitcher />
    </React.Fragment>
  );
}

export default withRouter(Layout);