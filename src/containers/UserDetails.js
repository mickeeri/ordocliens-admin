import React, { Component } from 'react';
import FlexContainer from '../components/FlexContainer';
import Card from '../components/Card';
import { fetchUser } from '../services/api';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import RedirectBackWrapper from '../components/RedirectBackWrapper';

import format from 'date-fns/format';
import styled from 'styled-components';

const UserInfoListHeader = styled.div`display: flex;`;
const UserInfoList = styled.ul``;
const ListItem = styled.li`margin: 10px 0;`;

const UserInfo = ({
  user: {
    firstName,
    lastName,
    email,
    createdAt,
    role,
    firm,
    signInCount,
    numberOfClients,
    numberOfLawsuits,
    lastSignInAt,
    lastLawsuitCreatedAt,
    lastClientCreatedAt,
  },
}) => {
  return (
    <div className="UserInfo">
      <UserInfoListHeader>
        <h2>
          {firstName} {lastName}
        </h2>
      </UserInfoListHeader>
      <UserInfoList>
        <ListItem>
          {firm.name}
        </ListItem>
        <ListItem>
          {email}
        </ListItem>
        <ListItem>
          <strong>Behörighet: </strong>
          {role}
        </ListItem>
        <ListItem>
          <strong>Registerad: </strong>
          {format(createdAt, 'YYYY-MM-DD')}
        </ListItem>
        <ListItem>
          <strong>Antal inloggningar: </strong>
          {signInCount}
        </ListItem>
        <ListItem>
          <strong>Senaste inloggningen: </strong>
          {format(lastSignInAt, 'YYYY-MM-DD')}
        </ListItem>

        <ListItem>
          <strong>Antal klienter: </strong>
          {numberOfClients}
        </ListItem>

        <ListItem>
          <strong>Antal ärenden: </strong>
          {numberOfLawsuits}
        </ListItem>

        <ListItem>
          <strong>Senaste klienten skapad: </strong>
          {format(lastClientCreatedAt, 'YYYY-MM-DD')}
        </ListItem>

        <ListItem>
          <strong>Senaste ärendet skapat: </strong>
          {format(lastLawsuitCreatedAt, 'YYYY-MM-DD')}
        </ListItem>
      </UserInfoList>
    </div>
  );
};

export default class UserDetails extends Component {
  state = {
    user: null,
    isFetching: false,
    errorMessage: '',
  };

  componentDidMount() {
    this.makeIntialRequest();
  }

  async makeIntialRequest() {
    this.setState({ isFetching: true });
    try {
      const user = await fetchUser(this.props.match.params.id);
      this.setState({ user, isFetching: false });
    } catch (err) {
      this.setState({
        errorMessage:
          err.message ||
          'Kunde inte hämta användare på grund av ett okänt fel.',
        isFetching: false,
      });
    }
  }

  render() {
    const { isFetching, user, errorMessage } = this.state;

    return (
      <FlexContainer className="UserDetails">
        <Card showLoader={isFetching} loaderText="Hämtar användare">
          {errorMessage
            ? <Alert tryAgainFunc={this.makeIntialRequest.bind(this)}>
                {errorMessage}
              </Alert>
            : user && <UserInfo user={user} />}
        </Card>
        <RedirectBackWrapper>
          <Link to="/">Tillbaka till listan</Link>
        </RedirectBackWrapper>
      </FlexContainer>
    );
  }
}
