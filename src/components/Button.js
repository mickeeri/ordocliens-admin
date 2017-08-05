import styled from 'styled-components';
import styledProps from 'styled-props';

const background = {
  default: {
    primary: '#4fc3f7',
    danger: '#DD2C00',
    success: '#00C281',
    info: '#BBDEFB',
    link: '#FFFFFF',
  },
  hover: {
    primary: '#6ecbf5',
    danger: '#DD2C00',
    success: '#01D48D',
    info: '#BBDEFB',
  },
};

const color = {
  default: {
    primary: '#FAFAFA',
    default: '#FAFAFA',
  },
  hover: {
    link: '#454242',
  },
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
  color: ${styledProps(color.default)};
  height: 36px;
  border-radius: ${styledProps(size.borderRadius)}px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${styledProps(background.hover)};
    color: ${styledProps(color.hover)};
  }

  .spinner {
    margin-left: 10px;
  }
`;

export default Button;
