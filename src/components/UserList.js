import React from 'react';
import styled from 'styled-components';
import { shape, arrayOf, number, string } from 'prop-types';
import { Link } from 'react-router-dom';

const List = styled.ul``;

const ListItem = styled.li`
  margin: 10px 0;
  background: #f9f5f5;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #eee;
`;

const ListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListItemContent = styled.div`
  font-size: 14px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;

  a {
    font-size: 14px;
  }
`;

const UserList = ({ firms }) => {
  return (
    <div className="UserList">
      <h2>Användare</h2>
      <List>
        {firms.map(firm =>
          firm.users.map(({ id, firstName, lastName, email }) =>
            <ListItem key={id}>
              <ListItemHeader>
                <h3>
                  {firstName} {lastName}
                </h3>
                <small>
                  {firm.name}
                </small>
              </ListItemHeader>
              <ListItemContent>
                <ul>
                  <li>
                    {email}
                  </li>
                </ul>
                <div>
                  <Link to={`/users/${id}`}>Mer info</Link>
                </div>
              </ListItemContent>
            </ListItem>
          )
        )}
      </List>
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
        })
      ).isRequired,
    })
  ).isRequired,
};

export default UserList;
