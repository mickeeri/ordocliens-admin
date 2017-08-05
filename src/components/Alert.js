import styled from 'styled-components';
import styledProps from 'styled-props';

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

const Alert = styled.div`
  margin: 15px 0;
  background: ${styledProps(background)};
  color: ${styledProps(color)};
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  padding: 15px;
  border-radius: 3px;
`;

export default Alert;
