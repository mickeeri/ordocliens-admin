import React from 'react';
import styled from 'styled-components';
import styledProps from 'styled-props';
import Button from './Button';

const background = {
  primary: '#F5F5F5',
  danger: '#DD2C00',
  success: '#00C281',
  info: '#BBDEFB',
};

const color = {
  primary: '#263238',
  default: '#FAFAFA',
};

const AlertWrapper = styled.div`
  margin: 15px 0;
  background: ${styledProps(background)};
  color: ${styledProps(color)};
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  padding: 15px;
  border-radius: 3px;

  button {
    margin: 5px 0;
  }
`;

const Alert = ({ tryAgainFunc, children }) => {
  return (
    <AlertWrapper>
      {children}
      <div>
        {tryAgainFunc &&
          <Button primary onClick={() => tryAgainFunc()}>
            Försök igen
          </Button>}
      </div>
    </AlertWrapper>
  );
};

export default Alert;
