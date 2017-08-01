import React, { Component } from 'react';
import Input from '../components/forms/Input';
import FormGroup from '../components/forms/FormGroup';
import Button from '../components/Button';

class UserForm extends Component {
  render() {
    return (
      <div className="UserForm">
        <h2>Lägg till ny användare</h2>

        <form>
          <FormGroup>
            <Input name="firstName" type="text" placeholder="Ange förnamn" />
          </FormGroup>

          <FormGroup>
            <Input name="lastName" type="text" placeholder="Ange efternamn" />
          </FormGroup>

          <Button success medium default>
            Spara användare
          </Button>
        </form>
      </div>
    );
  }
}

export default UserForm;
