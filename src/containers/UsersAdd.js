import React, { Component } from 'react';
import UserForm from './UserForm';
import FlexContainer from '../components/FlexContainer';
import Card from '../components/Card';
import { fetchFirms, createUser } from '../services/api';
import RedirectBackWrapper from '../components/RedirectBackWrapper';
import { Link } from 'react-router-dom';

class UsersAdd extends Component {
  state = {
    firms: [],
    errorMessage: '',
    isSubmitting: false,
    isFetching: false,
  };

  componentDidMount() {
    this.fetchFirms();
  }

  async fetchFirms() {
    this.setState({ isFetching: true });
    try {
      const firms = await fetchFirms();
      this.setState({ isFetching: false, firms });
    } catch (err) {
      this.setState({
        errorMessage: err.message || 'Ett fel uppstod, försök igen senare.',
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
    const { isFetching, errorMessage, isSubmitting, firms } = this.state;
    return (
      <FlexContainer>
        <Card showLoader={isFetching} loaderText="Laddar">
          {firms.length &&
            <UserForm
              onSubmit={this.createUser.bind(this)}
              errorMessage={errorMessage}
              isSubmitting={isSubmitting}
              firms={firms}
            />}
        </Card>
        <RedirectBackWrapper>
          <Link to="/">Tillbaka till listan</Link>
        </RedirectBackWrapper>
      </FlexContainer>
    );
  }
}

export default UsersAdd;
