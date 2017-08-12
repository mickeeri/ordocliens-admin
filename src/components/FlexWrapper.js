import styled from 'styled-components';
import styledProps from 'styled-props';

const justify = {
  center: 'center',
  justifySpaceBetween: 'space-between',
  justifySpaceAround: 'space-around',
  justifyEnd: 'flex-end',
  justiyStart: 'flex-start',
};

const align = {
  alignCenter: 'center',
  alignEnd: 'flex-end',
  alignStart: 'flex-start',
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${styledProps(justify)};
  align-items: ${styledProps(align)};
`;

export default FlexContainer;
