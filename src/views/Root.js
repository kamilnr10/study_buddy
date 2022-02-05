import React, { useState, useEffect, useContext } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from 'data/users';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser.js';
import Dashboard from 'views/Dashboard';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import { useStudents } from 'hooks/useStudents';
import Modal from 'components/organisms/Modal/Modal';

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { groups } = useStudents();
  const { id } = useParams();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            {isModalOpen ? <Modal handleClose={() => setModalOpen(false)} /> : null}
            <button onClick={() => setModalOpen(true)}>Open modal</button>
            <Routes>
              <Route path="/" element={<Navigate replace to="/groups/A" />} />
              <Route path="/groups/:id" element={<Dashboard />} />
              <Route path="/groups/" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/news" element={<NewsSection />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
