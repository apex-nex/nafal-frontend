import React, { Suspense } from "react";
import Layout from "./components/Layout/index";
import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/css/materialdesignicons.min.css"
import "./Apps.scss";
// import "./assets/css/colors/default.css";
import routes from "./routes/allRoutes";
import withRouter from "./common/data/withRouter";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useAuth } from "./store/auth";

const App = () => {
  const { isLoggedIn } = useAuth()
  const LoaderComponent = () => (
    <div id="">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );

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
