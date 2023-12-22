import React, { Suspense, useEffect, useState } from "react";
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

const Layout = ({ router, children }) => {
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    setIsDashboard(router.location.pathname === "/admin-dashboard");
  }, [router.location.pathname]);

  return (
    <React.Fragment>
      <Suspense fallback={Loader()}>
        {!isDashboard ? <Navbar /> : <NavbarAdmin />}
        {children}
        {!isDashboard ? <Footer /> : <FooterAdmin />}
        <BackToTop />
      </Suspense>
    </React.Fragment>
  );
};

export default withRouter(Layout);
