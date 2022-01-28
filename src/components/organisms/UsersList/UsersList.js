import React, { useState, useEffect, useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper, StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <ViewWrapper>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </ViewWrapper>
  );
};

export default UsersList;
