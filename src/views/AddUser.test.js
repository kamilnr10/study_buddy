import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Form Field', () => {
  it('Adds new user to the list', () => {
    renderWithThemeProvider(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grazyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grazyna');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    renderWithThemeProvider(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grazyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grazyna');
    expect(newUser).not.toBeInTheDocument();
  });
});
