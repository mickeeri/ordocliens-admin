import React, { Component } from 'react';
import { func, bool, string } from 'prop-types';
import InputGroup from '../components/forms/InputGroup';
import ButtonWithLoader from '../components/ButtonWithLoader';
import FormWrapper from '../components/forms/FormWrapper';
import Alert from '../components/Alert';
import { handleChange, handleSubmit } from '../utils/formUtils';

class FirmForm extends Component {
  state = {
    fields: {
      name: '',
    },
  };

  render() {
    const { name } = this.state.fields;
    const { errorMessage, isSubmitting } = this.props;

    return (
      <FormWrapper
        className="FirmForm"
        onSubmit={handleSubmit.bind(this)}
        novalidate
      >
        <InputGroup
          name="name"
          placeholder="Ange firmans namn"
          label="Namn"
          onChange={handleChange.bind(this)}
          value={name}
        />

        {errorMessage && <Alert>{errorMessage}</Alert>}

        <ButtonWithLoader
          success
          medium
          default
          type="submit"
          showLoader={isSubmitting}
        >
          Spara firma
        </ButtonWithLoader>
      </FormWrapper>
    );
  }
}

FirmForm.propTypes = {
  isSubmitting: bool.isRequired,
  onSubmit: func.isRequired,
  errorMessage: string,
};

export default FirmForm;
