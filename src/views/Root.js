import logo from 'assets/logo.svg';
import UsersList from 'components/UsersList/UsersList';
import { users } from 'data/users';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <Wrapper>
      <UsersList />
    </Wrapper>
  );
};

export default Root;
