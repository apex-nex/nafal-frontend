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
  const { isLoggedIn, isDarkMode } = useAuth()

  useEffect(() => {
    // Dynamically import styles based on isDarkMode
    const importStyles = async () => {
      if (isDarkMode) {
        await import('./assets/scss/bootstrap-dark.scss');
        await import('./assets/scss/style-dark.scss');
      }
    };

    importStyles();
  }, [isDarkMode]);

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
