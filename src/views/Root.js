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
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useStudents } from 'hooks/useStudents';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate replace to="/groups/A" />} />
          <Route path="/groups/:id" element={<Dashboard />} />
          <Route path="/groups/" element={<Dashboard />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/news" element={<NewsSection />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const onSubmit = ({ login, password }) => handleSignIn({ login, password });

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login')} />
      <FormField label="password" name="password" id="password" type="password" {...register('password')} />
      <Button type="submit">Sign in</Button>
      {loginError && <span>{loginError}</span>}
    </form>
  );
};

const Root = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
      setError('Please provide valid user data');
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
