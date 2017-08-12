import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  margin: 10px 0;
  background: #f9f5f5;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #eee;
`;

export const ListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListItemContent = styled.div`
  font-size: 14px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;

  a {
    font-size: 14px;
  }
`;
