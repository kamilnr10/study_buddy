import React, { useState } from 'react';
import { users as usersData } from 'data/users';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: null,
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);
  const [searchBar, setSearchBar] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };

  const handleSearchBar = () => {
    console.log('klik');
    setSearchBar(!searchBar);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
        searchBar,
        handleSearchBar,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
