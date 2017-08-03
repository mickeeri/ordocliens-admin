import React, { Component } from 'react';
import InputGroup from '../components/forms/InputGroup';
import Button from '../components/Button';
import FormWrapper from '../components/forms/FormWrapper';

class UserForm extends Component {
  render() {
    return (
      <FormWrapper className="UserForm">
        <h2>Lägg till ny användare</h2>

        <InputGroup
          name="firstName"
          placeholder="Ange förnamn"
          label="Förnamn"
        />

        <InputGroup
          name="lastName"
          placeholder="Ange efternamn"
          label="Efternamn"
        />

        <Button success medium default>
          Spara användare
        </Button>
      </FormWrapper>
    );
  }
}

export default UserForm;
