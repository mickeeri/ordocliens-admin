import React, { Component } from 'react';
import { func, bool, string, array } from 'prop-types';
import InputGroup from '../components/forms/InputGroup';
import ButtonWithLoader from '../components/ButtonWithLoader';
import FormWrapper from '../components/forms/FormWrapper';
import Alert from '../components/Alert';
import SelectGroup from '../components/forms/SelectGroup';

class UserForm extends Component {
  state = {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      firmId: 0,
    },
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.fields);
  };

  handleChange = event => {
    const { name, value } = event.target;
    const fields = this.state.fields;
    this.setState({
      fields: {
        ...fields,
        [name]: value,
      },
    });
  };

  render() {
    const { firstName, lastName, email, firmId } = this.state.fields;
    const { errorMessage, isSubmitting, firms } = this.props;

    return (
      <FormWrapper className="UserForm" onSubmit={this.handleSubmit} novalidate>
        <h2>Lägg till ny användare</h2>

        <SelectGroup
          name="firmId"
          label="Firma"
          options={firms}
          value={parseInt(firmId, 10)}
          onChange={this.handleChange}
          defaultName="Välj firma"
        />

        <InputGroup
          name="firstName"
          placeholder="Ange förnamn"
          label="Förnamn"
          onChange={this.handleChange}
          value={firstName}
        />

        <InputGroup
          name="lastName"
          placeholder="Ange efternamn"
          label="Efternamn"
          onChange={this.handleChange}
          value={lastName}
        />

        <InputGroup
          name="email"
          placeholder="Ange e-post"
          label="E-post"
          onChange={this.handleChange}
          value={email}
        />

        {errorMessage &&
          <Alert>
            {errorMessage}
          </Alert>}

        <ButtonWithLoader
          success
          medium
          default
          type="submit"
          showLoader={isSubmitting}
        >
          Spara användare
        </ButtonWithLoader>
      </FormWrapper>
    );
  }
}

UserForm.propTypes = {
  onSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
  errorMessage: string,
  firms: array.isRequired,
};

export default UserForm;
