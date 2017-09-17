import React, { PureComponent } from 'react';
import FlexContainer from '../components/FlexContainer';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import RedirectBackWrapper from '../components/RedirectBackWrapper';
import { Link } from 'react-router-dom';
import { createFirm } from '../services/api';
import FirmForm from './FirmForm';

class AddFirm extends PureComponent {
  state = {
    errorMessage: '',
    isSubmitting: false,
  };

  async createFirm(newFirm) {
    this.setState({ isSubmitting: true });
    try {
      await createFirm(newFirm);
      this.props.history.push('/');
    } catch (err) {
      this.setState({
        errorMessage: err.message || 'Det gick inte att skapa firma',
        isSubmitting: false,
      });
    }
  }
  render() {
    const { isSubmitting, errorMessage } = this.state;

    return (
      <FlexContainer>
        <PageHeader>
          <h1>Lägg till firma</h1>
        </PageHeader>
        <Card>
          <FirmForm
            onSubmit={this.createFirm.bind(this)}
            errorMessage={errorMessage}
            isSubmitting={isSubmitting}
          />
        </Card>
        <RedirectBackWrapper>
          <Link to="/">Tillbaka till listan</Link>
        </RedirectBackWrapper>
      </FlexContainer>
    );
  }
}

export default AddFirm;
