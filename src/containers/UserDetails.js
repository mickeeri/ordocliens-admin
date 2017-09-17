import React, { Component } from 'react';
import { fetchUser, fetchRoles, fetchFirms, editUser } from '../services/api';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import Button from '../components/Button';
import Card from '../components/Card';
import FlexContainer from '../components/FlexContainer';
import FlexWrapper from '../components/FlexWrapper';
import RedirectBackWrapper from '../components/RedirectBackWrapper';
import UserForm from './UserForm';
import UserInfo from '../components/UserInfo';

export default class UserDetails extends Component {
  state = {
    user: null,
    isFetching: false,
    fetchError: '',
    submitError: '',
    inEditMode: false,
    firms: [],
    roles: [],
    isSubmitting: false,
  };

  componentDidMount() {
    this.makeIntialRequest();
  }

  changeToEditMode() {
    this.setState({ inEditMode: !this.state.inEditMode });
  }

  async makeIntialRequest() {
    this.setState({ isFetching: true });
    try {
      const user = await fetchUser(this.props.match.params.id);
      const firms = await fetchFirms();
      const roles = await fetchRoles();
      this.setState({ user, isFetching: false, firms, roles });
    } catch (err) {
      this.setState({
        fetchError:
          err.message ||
          'Kunde inte hämta användare på grund av ett okänt fel.',
        isFetching: false,
      });
    }
  }

  async editUser(updatedUser) {
    this.setState({ isSubmitting: true });
    try {
      const user = await editUser(this.state.user.id, updatedUser);
      this.setState({ isSubmitting: false, inEditMode: false, user });
    } catch (err) {
      this.setState({
        submitError: err.message || 'Det gick inte att uppdatera användare',
        isSubmitting: false,
      });
    }
  }

  render() {
    const {
      isFetching,
      user,
      fetchError,
      submitError,
      inEditMode,
      firms,
      roles,
      isSubmitting,
    } = this.state;

    return (
      <FlexContainer className="UserDetails">
        <Card showLoader={isFetching} loaderText="Hämtar användare">
          {fetchError ? (
            <Alert tryAgainFunc={this.makeIntialRequest.bind(this)}>
              {fetchError}
            </Alert>
          ) : (
            user && (
              <div>
                {inEditMode ? (
                  <UserForm
                    onSubmit={this.editUser.bind(this)}
                    errorMessage={submitError}
                    firms={firms}
                    roles={roles}
                    isSubmitting={isSubmitting}
                    user={user}
                  />
                ) : (
                  <UserInfo user={user} />
                )}
              </div>
            )
          )}
          <FlexWrapper justifyEnd>
            <Button onClick={this.changeToEditMode.bind(this)}>
              {inEditMode ? 'Avbryt' : 'Redigera'}
            </Button>
          </FlexWrapper>
        </Card>
        <RedirectBackWrapper>
          <Link to="/">Tillbaka till listan</Link>
        </RedirectBackWrapper>
      </FlexContainer>
    );
  }
}
