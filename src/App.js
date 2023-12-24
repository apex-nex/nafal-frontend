import React, { Suspense, useEffect } from "react";
import Layout from "./components/Layout/index";
import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/css/materialdesignicons.min.css"
import "./Apps.scss";
import "./assets/css/colors/skyblue.css";
import routes from "./routes/allRoutes";
import withRouter from "./common/data/withRouter";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./store/auth";
import { LoaderComponent } from "./common/data/utils/common";

const App = () => {
  const { isLoggedIn, isDarkMode, isArabic } = useAuth()

  useEffect(() => {
    // Dynamically import styles based on isDarkMode and/or isArabic
    const importStyles = async () => {
      if (isArabic && isDarkMode) {
        // Import styles for Arabic and Dark Mode
        await import('./assets/scss/bootstrap-dark.scss');
        await import('./assets/scss/style-dark.scss');
        await import('./assets/scss/style-rtl.scss');
      } else {
        // Import styles based on isDarkMode
        if (isDarkMode) {
          await import('./assets/scss/bootstrap-dark.scss');
          await import('./assets/scss/style-dark.scss');
        }
  
        // Import styles based on isArabic
        if (isArabic) {
          await import('./assets/scss/bootstrap.scss');
          await import('./assets/scss/style.scss');
          await import('./assets/scss/style-rtl.scss');
        }
      }
    };
  
    // Call the function
    importStyles();
  }, [isDarkMode, isArabic]);

  return (
    <React.Fragment>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          {routes.map((route, idx) =>
            route.isWithoutLayout ? (
              <Route
                path={route.path}
                element={
                  route.path === "/auth-login" ? (
                    !isLoggedIn ? route.component : <Navigate to="/admin-dashboard" />
                  ) : (
                    route.component
                  )
                }
                key={idx} />
            ) : (
              <Route
                path={route.path}
                element={
                  <Layout>
                    {route.path === "/admin-dashboard" ? (
                      isLoggedIn ? route.component : <Navigate to="/auth-login" />
                    ) : (
                      route.component
                    )}
                  </Layout>
                }
                key={idx}
              />
            )
          )}
        </Routes>
      </Suspense>
      <ToastContainer />
    </React.Fragment>
  );
}

export default withRouter(App);
