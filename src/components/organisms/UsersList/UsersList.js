import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import { FormField } from 'components/molecules/FormField/FormField';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

const UsersListWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const mockAPI = (succes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = ({ users, deleteUser, isLoading }) => {
  return (
    <UsersListWrapper>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Students list'}</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} userData={userData} key={userData.name} />
          ))}
        </StyledList>
      </Wrapper>
    </UsersListWrapper>
  );
};

export default UsersList;
