import styled from 'styled-components';

export const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 90%;
  max-width: 500px;
  max-height: 480px;
  padding: 30px 20px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: scroll;
  height: 310px;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
