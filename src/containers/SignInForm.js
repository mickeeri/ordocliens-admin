import React, { Component } from 'react';
import Input from '../components/forms/Input';
import FormGroup from '../components/forms/FormGroup';
import Button from '../components/Button';

class SignInForm extends Component {
  render() {
    return (
      <form className="UserForm">
        <h2>Logga in</h2>

        <FormGroup label="E-post">
          <Input name="E-post" type="text" placeholder="Ange E-post" />
        </FormGroup>

        <FormGroup label="Lösenord">
          <Input name="lastName" type="password" placeholder="Ange efternamn" />
        </FormGroup>

        <Button success medium default>
          Logga in
        </Button>
      </form>
    );
  }
}

export default SignInForm;
