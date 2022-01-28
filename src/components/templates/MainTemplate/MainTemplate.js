import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 35px;
    height: 35px;
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
      <Link to="/">
        <img src={dashboard} alt="" />
      </Link>
      <Link to="/add-user">
        <img src={addUser} alt="" />
      </Link>
      <Link to="/settings">
        <img src={settings} alt="" />
      </Link>
      <Link to="/logout">
        <img src={logout} alt="" />
      </Link>
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
      <h4>Study buddy</h4>
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
