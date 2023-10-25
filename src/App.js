import React, { Component, Suspense } from 'react';
// import Layout from "./components/Layout/";
import Layout1 from './pages/Nafal/layout/index';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom';

// Import Css
import './assets/css/materialdesignicons.min.css';
import './Apps.scss';

// import "./assets/css/colors/default.css";

// Include Routes
import routes from './routes/allRoutes';
import routes1 from './routes/nafalAllRoutes';

function withLayout(WrappedComponent) {
  // ...and returns another component...
  /* eslint-disable react/display-name */
  return class extends React.Component {
    render() {
      return (
        <Layout1>
          <WrappedComponent></WrappedComponent>
        </Layout1>
      );
    }
  };
}

class App extends Component {
  Loader = () => {
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
  render() {
    return (
      <React.Fragment>
        <Router>
          <Suspense fallback={this.Loader()}>
            <Switch>
              {routes1.map((route, idx) => (
                <Route
                  path={route.path}
                  exact
                  component={withLayout(route.component)}
                  key={idx}
                />
              ))}
            </Switch>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
