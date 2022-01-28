import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AddUserIcon } from 'assets/icons/adduser.svg';
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';
import addUser from 'assets/icons/add-user.png';
import dashboard from 'assets/icons/personal-computer.png';
import settings from 'assets/icons/settings.png';
import logout from 'assets/icons/logout.png';
import search from 'assets/icons/search.png';

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

const AddUser = styled(AddUserIcon)`
  width: 25px;
  height: 25px;
  padding: 5px 0 0;
`;

const Dashboard = styled(DashboardIcon)`
  width: 35px;
  height: 35px;
`;
const Navigation = () => {
  return (
    <NavWrapper>
      <StyledLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
        <img src={dashboard} alt="" />
      </StyledLink>
      <StyledLink className={({ isActive }) => (isActive ? 'active' : '')} to="/add-user">
        <img src={addUser} alt="" />
      </StyledLink>
      <StyledLink to="/settings">
        <img src={settings} alt="" />
      </StyledLink>
      <StyledLink to="/logout">
        <img src={logout} alt="" />
      </StyledLink>
    </NavWrapper>
  );
};

const MainBar = styled.div`
  width: 100%;
  height: 55px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0 15px;
  }

  img {
    width: 35px;
    height: 35px;
    margin: 0 15px;
  }
`;

const NavigationTop = () => {
  return (
    <MainBar>
      <h4>
        Study
        <br /> buddy
      </h4>
      <img src={search} alt="" />
    </MainBar>
  );
};

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavigationTop />
      {children}
      <Navigation />
    </Wrapper>
  );
};
