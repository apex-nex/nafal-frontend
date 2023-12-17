import React, { Component, Suspense } from "react";
import BackToTop from "./backToTop";
import withRouter from "../../common/data/withRouter";
import NavbarAdmin from "./NavbarAdmin";
import FooterAdmin from "./FooterAdmin";

// Layout Components  
const Navbar = React.lazy(() => import("./Navbar"));
const Footer = React.lazy(() => import("./Footer"));

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>

          {(() => {
            if (
              this.props.router.location.pathname === "/admin-dashboard"
            ) {
              return <NavbarAdmin />;
            }
            else {
              return <Navbar />;
            }
          })()}

          {this.props.children}

          {(() => {
            if (
              this.props.router.location.pathname === "/admin-dashboard"
            ) {
              return <FooterAdmin />;
            }
            else {
              return <Footer />;
            }
          })()}

          <BackToTop />
        </Suspense>

      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
