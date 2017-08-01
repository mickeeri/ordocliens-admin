import React from 'react';
import styled from 'styled-components';
import styledProps from 'styled-props';

const background = {
  default: {
    primary: '#F5F5F5',
    danger: '#DD2C00',
    success: '#00C281',
    info: '#BBDEFB',
  },
  hover: {
    primary: '#F5F5F5',
    danger: '#DD2C00',
    success: '#01D48D',
    info: '#BBDEFB',
  },
};

const color = {
  primary: '#263238',
  default: '#FAFAFA',
};

const size = {
  padding: {
    small: 5,
    medium: 10,
    big: 20,
  },
  borderRadius: {
    default: 4,
  },
};

const Button = styled.button`
  margin: 20px 0;
  background: ${styledProps(background.default)};
  border: 0;
  color: ${styledProps(color)};
  padding: ${styledProps(size.padding)}px;
  border-radius: ${styledProps(size.borderRadius)}px;
  cursor: pointer;

  &:hover {
    background: ${styledProps(background.hover)};
  }
`;

export default Button;
