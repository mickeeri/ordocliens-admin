import React, { Component } from 'react';
import UserList from '../components/UserList';
import UserForm from './UserForm';
import { fetchUsers } from '../services/api';

export default class Dasboard extends Component {
  componentDidMount() {
    fetchUsers();
  }

  render() {
    return (
      <div className="Dashboard">
        <h2>This is the dashboard</h2>
      </div>
    );
  }
}
