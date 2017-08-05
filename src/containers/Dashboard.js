import React, { Component } from 'react';
import UserList from '../components/UserList';
import { fetchUsers, fetchFirms } from '../services/api';
import Card from '../components/Card';
import CardLoader from '../components/CardLoader';
import FlexContainer from '../components/FlexContainer';
import PageHeader from '../components/PageHeader';

export default class Dashboard extends Component {
  state = {
    firms: {},
    users: {},
    isFetching: false,
  };

  componentDidMount() {
    this.makeIntialRequest();
  }

  async makeIntialRequest() {
    this.setState({ isFetching: true });
    try {
      const users = await fetchUsers();
      const firms = await fetchFirms();
      this.setState({ firms, users, isFetching: false });
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    const { isFetching, firms, users } = this.state;

    return (
      <FlexContainer className="Dashboard">
        <PageHeader>
          <h1>Dashboard</h1>
        </PageHeader>
        <Card>
          {isFetching
            ? <CardLoader />
            : <UserList firms={firms} users={users} />}
        </Card>
        <Card />
      </FlexContainer>
    );
  }
}
