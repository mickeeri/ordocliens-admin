import React, { Component } from 'react';
import FlexContainer from '../components/FlexContainer';
import Card from '../components/Card';
import SignInForm from './SignInForm';
import auth from '../services/auth';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    errorMessage: '',
    isSubmitting: false,
    isAuthenticating: false,
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  // Check if user already has a valid token.
  async checkIfSignedIn() {
    try {
      this.setState({ isAuthenticating: true });
      await auth.authenticateWithToken();
      this.setState({ redirectToReferrer: true, isAuthenticating: false });
    } catch (e) {
      this.setState({ redirectToReferrer: false, isAuthenticating: false });
    }
  }

  // Sign in with email and password.
  async signIn(credentials) {
    try {
      this.setState({ isSubmitting: true, errorMessage: '' });
      await auth.authenticateWithCredentials(credentials);
      this.setState({
        errorMessage: '',
        isSubmitting: false,
        redirectToReferrer: true,
      });
    } catch (err) {
      this.setState({ errorMessage: err.message, isSubmitting: false });
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const {
      redirectToReferrer,
      errorMessage,
      isSubmitting,
      isAuthenticating,
    } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <FlexContainer center>
        <Card showLoader={isAuthenticating} loaderText="Autentiserar">
          <SignInForm
            onSubmit={this.signIn.bind(this)}
            errorMessage={errorMessage}
            isSubmitting={isSubmitting}
          />
        </Card>
      </FlexContainer>
    );
  }
}

export default SignIn;
