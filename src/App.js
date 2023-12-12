import React, { Suspense } from 'react';
import Layout from "./components/Layout/";
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import routes from './routes/allRoutes';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from './store/auth';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/materialdesignicons.min.css';
import './Apps.scss';

function withLayout(WrappedComponent) {
  return function WithLayoutComponent() {
    return (
      <Layout>
        <WrappedComponent />
      </Layout>
    );
  };
}

const Loader = () => {
  return (
    <div id="">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const { isLoggedIn } = useAuth()

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.isWithoutLayout ? (
                  route.dashboard ? (
                    <Route
                      path={route.path}
                      exact={route.exact}
                      component={isLoggedIn ? route.component : () => window.location.replace("/admin/login")}
                      key={idx}
                    />
                  ) : (
                    route.login ? (
                      <Route
                        path={route.path}
                        exact={route.exact}
                        component={isLoggedIn ? () => window.location.replace("/admin/dashboard") : route.component}
                        key={idx}
                      />
                    ) : (
                      <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={idx}
                      />
                    )
                  )
                ) : (
                  <Route
                    path={route.path}
                    exact
                    component={withLayout(route.component)}
                    key={idx}
                  />
                )
                );
              })}
          </Switch>
        </Suspense>
              <ToastContainer/>
      </Router>
    </React.Fragment>
  );
};

export default withRouter(App);
