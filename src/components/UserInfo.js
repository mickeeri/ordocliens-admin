import React from 'react';
import { string, object, number, shape } from 'prop-types';

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
        <ListItem>{firm.name}</ListItem>
        <ListItem>{email}</ListItem>
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
          {signInCount ? format(lastSignInAt, 'YYYY-MM-DD') : ''}
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
          {signInCount ? format(lastClientCreatedAt, 'YYYY-MM-DD') : ''}
        </ListItem>

        <ListItem>
          <strong>Senaste ärendet skapat: </strong>
          {signInCount ? format(lastLawsuitCreatedAt, 'YYYY-MM-DD') : ''}
        </ListItem>
      </UserInfoList>
    </div>
  );
};

UserInfo.propTypes = {
  user: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
    email: string.isRequired,
    createdAt: string.isRequired,
    role: string.isRequired,
    firm: object.isRequired,
    signInCount: number.isRequired,
    numberOfClients: number.isRequired,
    numberOfLawsuits: number.isRequired,
    lastSignInAt: string,
    lastLawsuitCreatedAt: string,
    lastClientCreatedAt: string,
  }).isRequired,
};

export default UserInfo;
