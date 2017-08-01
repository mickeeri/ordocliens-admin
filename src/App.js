import React, { Component } from 'react';
import Dasboard from './containers/Dashboard';
import SignInForm from './containers/SignInForm';
import Card from './components/Card';
import FlexContainer from './components/FlexContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ordocliens Admin</h1>
        <FlexContainer>
          <Card>
            <SignInForm />
          </Card>
        </FlexContainer>
        <Dasboard />
      </div>
    );
  }
}

export default App;
