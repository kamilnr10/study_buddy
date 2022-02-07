import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AddUserIcon } from 'assets/icons/adduser.svg';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import addUser from 'assets/icons/add-user.png';
import dashboard from 'assets/icons/personal-computer.png';
import settings from 'assets/icons/settings.png';
import logout from 'assets/icons/logout.png';
import card from 'assets/icons/card.png';
import { SearchNav } from 'components/organisms/SearchBar/SearchBar';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  grid-template-rows: 100px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const NavWrapper = styled.nav`
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  background-color: ${({ theme }) => theme.colors.lightGrey};

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 35px;
    height: 35px;
  }
`;

const activeClassName = 'active';

const StyledLink = styled(NavLink)`
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <StyledLink className={({ isActive }) => (isActive ? 'active' : '')} to="/groups/A">
        <img src={dashboard} alt="" />
      </StyledLink>
      <StyledLink className={({ isActive }) => (isActive ? 'active' : '')} to="/news">
        <img src={card} alt="" />
      </StyledLink>
      <StyledLink className={({ isActive }) => (isActive ? 'active' : '')} to="/add-user">
        <img src={addUser} alt="" />
      </StyledLink>
      <StyledLink to="/settings">
        <img src={settings} alt="" />
      </StyledLink>
      <StyledLink as="a" onClick={() => localStorage.removeItem('token')}>
        <img src={logout} alt="" />
      </StyledLink>
    </NavWrapper>
  );
};

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <SearchNav />
      {children}
      <Navigation />
    </Wrapper>
  );
};
