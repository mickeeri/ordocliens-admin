import React, { Component } from 'react';
import UserList from '../components/UserList';
import { fetchFirms } from '../services/api';
import FlexContainer from '../components/FlexContainer';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default class Dashboard extends Component {
  state = {
    firms: [],
    isFetching: true,
    errorMessage: '',
  };

  componentDidMount() {
    this.makeIntialRequest();
  }

  async makeIntialRequest() {
    this.setState({ isFetching: true });
    try {
      const firms = await fetchFirms();
      this.setState({ firms, isFetching: false });
    } catch (err) {
      this.setState({
        errorMessage:
          err.message ||
          'Ett okänt fel gjorde att det inte gick att hämta användare',
        isFetching: false,
      });
    }
  }

  render() {
    const { isFetching, firms, errorMessage } = this.state;

    return (
      <FlexContainer className="Dashboard">
        <PageHeader>
          <h1>Dashboard</h1>
        </PageHeader>
        <Card showLoader={isFetching} loaderText="Hämtar användare">
          {errorMessage
            ? <Alert tryAgainFunc={this.makeIntialRequest.bind(this)}>
                {errorMessage}
              </Alert>
            : firms.length && <UserList firms={firms} />}
        </Card>
      </FlexContainer>
    );
  }
}
