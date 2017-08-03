import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.header`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
`;

const BrandWrapper = styled.div`
  margin: 0 20px;

  a {
    color: black;
    font-size: 25px;
    text-decoration: none;
    letter-spacing: 1px;
  }
`;

const RightMenu = styled.div`
  margin: 0 20px;

  a {
    cursor: pointer;
    color: black;
    text-decoration: none;

    &:hover {
      color: #454242;
    }
  }
`;

const Topbar = ({ isAuthenticated, onSignOut, SignOutButton, BrandLink }) => {
  return (
    <Wrapper>
      <BrandWrapper>
        <BrandLink />
      </BrandWrapper>
      <RightMenu>
        <SignOutButton />
      </RightMenu>
    </Wrapper>
  );
};

Topbar.propTypes = {
  isAuthenticated: bool.isRequired,
  onSignOut: func.isRequired,
};

export default Topbar;
