import React from 'react';
import styled from 'styled-components';
import MDSpinner from 'react-md-spinner';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnerText = styled.div`margin-top: 5px;`;

const CardLoader = ({ text }) => {
  return (
    <Wrapper className="CardLoader">
      <MDSpinner singleColor="#eee" size={40} />
      <SpinnerText>
        {text}
      </SpinnerText>
    </Wrapper>
  );
};

export default CardLoader;
