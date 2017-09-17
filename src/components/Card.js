import React from 'react';
import { bool, string } from 'prop-types';
import styled from 'styled-components';
import MDSpinner from 'react-md-spinner';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnerText = styled.div`margin-top: 5px;`;

const CardLoader = ({ text }) => {
  return (
    <LoaderWrapper className="CardLoader">
      <MDSpinner singleColor="#eee" size={40} />
      <SpinnerText>{text}</SpinnerText>
    </LoaderWrapper>
  );
};

const CardWrapper = styled.div`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  border-radius: 3px;
  flex-basis: 500px;
  margin: 0 5px;
`;

const Card = ({ showLoader, children, loaderText }) => {
  return (
    <CardWrapper>
      {showLoader ? <CardLoader text={loaderText} /> : children}
    </CardWrapper>
  );
};

Card.propTypes = {
  showLoader: bool,
  loaderText: string,
};

export default Card;
