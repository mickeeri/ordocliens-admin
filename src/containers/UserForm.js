import React, { Component } from 'react';
import { func, bool, string, array } from 'prop-types';
import InputGroup from '../components/forms/InputGroup';
import ButtonWithLoader from '../components/ButtonWithLoader';
import FormWrapper from '../components/forms/FormWrapper';
import Alert from '../components/Alert';
import SelectGroup from '../components/forms/SelectGroup';
import { handleChange, handleSubmit } from '../utils/formUtils';

class UserForm extends Component {
  state = {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      firmId: 0,
    },
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      firmId,
      role = 'user',
    } = this.state.fields;
    const { errorMessage, isSubmitting, firms, roles } = this.props;

    return (
      <FormWrapper
        className="UserForm"
        onSubmit={handleSubmit.bind(this)}
        novalidate
      >
        <SelectGroup
          name="firmId"
          label="Firma"
          options={firms}
          value={parseInt(firmId, 10)}
          onChange={handleChange.bind(this)}
          defaultName="Välj firma"
        />

        <SelectGroup
          name="role"
          label="Behörighet"
          options={roles}
          value={role}
          onChange={handleChange.bind(this)}
          defaultValue="user"
        />

        <InputGroup
          name="firstName"
          placeholder="Ange förnamn"
          label="Förnamn"
          onChange={handleChange.bind(this)}
          value={firstName}
        />

        <InputGroup
          name="lastName"
          placeholder="Ange efternamn"
          label="Efternamn"
          onChange={handleChange.bind(this)}
          value={lastName}
        />

        <InputGroup
          name="email"
          placeholder="Ange e-post"
          label="E-post"
          onChange={handleChange.bind(this)}
          value={email}
        />

        {errorMessage && <Alert>{errorMessage}</Alert>}

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
