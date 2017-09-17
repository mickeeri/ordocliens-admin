import React from 'react';
import { arrayOf, shape, string, array, number } from 'prop-types';
import {
  List,
  ListItem,
  ListItemHeader,
  ListItemContent,
} from '../components/List';
import FlexWrapper from '../components/FlexWrapper';
import { Link } from 'react-router-dom';

const FirmList = ({ firms }) => (
  <div className="FirmList">
    <h2>Firmor ({firms.length})</h2>
    <List>
      {firms.map(({ id, name, users }) => (
        <ListItem key={id}>
          <ListItemHeader>
            <h3>{name}</h3>
          </ListItemHeader>
          <ListItemContent>
            <ul>
              <li>Antal användare: {users.length}</li>
            </ul>
          </ListItemContent>
        </ListItem>
      ))}
    </List>
    <FlexWrapper justifyEnd>
      <Link to="add-firm">Lägg till ny firma</Link>
    </FlexWrapper>
  </div>
);

FirmList.propTypes = {
  firms: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      users: array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FirmList;
