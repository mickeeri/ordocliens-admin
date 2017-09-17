import React from 'react';
import { shape, arrayOf, number, string } from 'prop-types';
import {
  List,
  ListItem,
  ListItemHeader,
  ListItemContent,
} from '../components/List';
import { Link } from 'react-router-dom';
import FlexWrapper from '../components/FlexWrapper';

function getUserCount(firms) {
  return firms.reduce((count, firm) => {
    return count + firm.users.length;
  }, 0);
}
const UserList = ({ firms }) => {
  return (
    <div className="UserList">
      <h2>Användare ({getUserCount(firms)})</h2>
      <List>
        {firms.map(firm =>
          firm.users.map(({ id, firstName, lastName, email }) => (
            <ListItem key={id}>
              <ListItemHeader>
                <h3>
                  {firstName} {lastName}
                </h3>
                <small>{firm.name}</small>
              </ListItemHeader>
              <ListItemContent>
                <ul>
                  <li>{email}</li>
                </ul>
                <div>
                  <Link to={`/users/${id}`}>Mer info</Link>
                </div>
              </ListItemContent>
            </ListItem>
          )),
        )}
      </List>
      <FlexWrapper justifyEnd>
        <Link to="add-user">Lägg till ny användare</Link>
      </FlexWrapper>
    </div>
  );
};

UserList.propTypes = {
  firms: arrayOf(
    shape({
      id: number,
      name: string,
      users: arrayOf(
        shape({
          id: number,
          firstName: string,
          lastName: string,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default UserList;
