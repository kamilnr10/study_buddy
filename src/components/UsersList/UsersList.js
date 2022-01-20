import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 90%;
  max-width: 500px;
  padding: 40px 5px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  ul {
    padding: 0;
  }
`;

const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
