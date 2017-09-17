import React, { Component } from 'react';
import UserForm from './UserForm';
import FlexContainer from '../components/FlexContainer';
import Card from '../components/Card';
import { fetchFirms, createUser, fetchRoles } from '../services/api';
import RedirectBackWrapper from '../components/RedirectBackWrapper';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

class AddUser extends Component {
  state = {
    firms: [],
    errorMessage: '',
    isSubmitting: false,
    isFetching: false,
  };

  componentDidMount() {
    this.fetchFirmsAndRoles();
  }

  async fetchFirmsAndRoles() {
    this.setState({ isFetching: true });
    try {
      const firms = await fetchFirms();
      const roles = await fetchRoles();
      this.setState({ isFetching: false, firms, roles });
    } catch (err) {
      this.setState({
        errorMessage: err.message || 'Ett fel uppstod',
        isFetching: false,
      });
    }
  }

  async createUser(newUser) {
    this.setState({ isSubmitting: true });
    try {
      await createUser(newUser);
      this.props.history.push('/');
    } catch (err) {
      this.setState({
        errorMessage: err.message || 'Det gick inte att skapa en användare.',
        isSubmitting: false,
      });
    }
  }

  render() {
    const { isFetching, errorMessage, isSubmitting, firms, roles } = this.state;
    return (
      <FlexContainer id="AddUser">
        <PageHeader>
          <h1>Lägg till användare</h1>
        </PageHeader>
        <Card showLoader={isFetching} loaderText="Laddar">
          {firms.length && (
            <UserForm
              onSubmit={this.createUser.bind(this)}
              errorMessage={errorMessage}
              isSubmitting={isSubmitting}
              firms={firms}
              roles={roles}
            />
          )}
        </Card>
        <RedirectBackWrapper>
          <Link to="/">Tillbaka till listan</Link>
        </RedirectBackWrapper>
      </FlexContainer>
    );
  }
}

export default AddUser;
