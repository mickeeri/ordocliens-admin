import React, { Component } from 'react';
import Dashboard from './containers/Dashboard';
import SignIn from './containers/SignIn';
import UserDetails from './containers/UserDetails';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Link,
} from 'react-router-dom';
import auth from './services/auth';
import Topbar from './components/Topbar';
import Main from './components/Main';
import Button from './components/Button';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />}
    />
  );
};

const SignOutButton = withRouter(
  ({ history }) =>
    auth.isAuthenticated
      ? <Button
          link
          onClick={() => {
            auth.signout(() => history.push('/'));
          }}
        >
          Logga ut
        </Button>
      : null
);

const BrandLink = () => {
  return (
    <Link to={auth.isAuthenticated ? '/' : '/login'}>Ordocliens Admin</Link>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Topbar
              isAuthenticated={auth.isAuthenticated}
              onSignOut={auth.signout}
              SignOutButton={SignOutButton}
              BrandLink={BrandLink}
            />
            <Main>
              <Route exact path="/login" component={SignIn} />
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/users/:id" component={UserDetails} />
            </Main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
