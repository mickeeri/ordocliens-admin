import styled from 'styled-components';
import styledProps from 'styled-props';

const justify = {
  center: 'center',
  between: 'space-between',
};

const FlexContainer = styled.div`
  justify-content: ${styledProps(justify)};
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
`;

export default FlexContainer;
