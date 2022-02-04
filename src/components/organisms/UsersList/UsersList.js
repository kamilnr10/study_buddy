import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper, StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams, Link } from 'react-router-dom';
import { TitleWrapper } from 'components/templates/NewsSection/NewsSection';

const StudentsWrapper = styled.div``;

const GroupWrapper = styled(TitleWrapper)`
  display: flex;
  align-items: center;

  ${Title} {
    width: 150px;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.lightGrey};
      background-color: ${({ theme }) => theme.colors.darkGrey};
      border-radius: 50%;
    }
  }
`;

const UsersList = ({ students, groups }) => {
  // const { users } = useContext(UsersContext);
  const { id } = useParams();

  return (
    <ViewWrapper>
      <GroupWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/groups/${group}`}>
              {group}
            </Link>
          ))}
        </nav>
      </GroupWrapper>
      <StudentsWrapper>
        <Title>Students list</Title>
        <StyledList>
          {students.map((userData) => (
            <UsersListItem userData={userData} key={userData.id} />
          ))}
        </StyledList>
      </StudentsWrapper>
    </ViewWrapper>
  );
};

export default UsersList;
