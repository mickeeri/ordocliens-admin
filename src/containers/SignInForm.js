import React, { Component } from 'react';
import { func } from 'prop-types';
import InputGroup from '../components/forms/InputGroup';
import Button from '../components/Button';
import FormWrapper from '../components/forms/FormWrapper';
import Alert from '../components/Alert';
import MDSpinner from 'react-md-spinner';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: '',
        password: '',
      },
    };
  }

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

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.fields);
  };

  render() {
    const { email, password } = this.state.fields;
    const { errorMessage, submitting } = this.props;

    return (
      <FormWrapper
        onSubmit={this.handleSubmit}
        className="SignInForm"
        novalidate
      >
        <h2>Logga in</h2>

        <InputGroup
          name="email"
          label="E-post"
          placeholder="Ange e-post"
          type="email"
          value={email}
          onChange={this.handleChange}
        />

        <InputGroup
          name="password"
          label="Lösenord"
          placeholder="Ange lösenord"
          type="password"
          value={password}
          onChange={this.handleChange}
        />

        {errorMessage &&
          <Alert primary>
            {errorMessage}
          </Alert>}

        <Button success medium default type="submit">
          {submitting
            ? <span>
                Loggar in
                <MDSpinner
                  className="spinner"
                  size={18}
                  singleColor="#01D48D"
                />
              </span>
            : <span>Logga in</span>}
        </Button>
      </FormWrapper>
    );
  }
}

SignInForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SignInForm;
