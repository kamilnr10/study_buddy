import React, { useState, useEffect, useContext } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from 'data/users';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser.js';
import Dashboard from 'views/Dashboard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
