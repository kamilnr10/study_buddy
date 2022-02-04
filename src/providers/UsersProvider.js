import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: null,
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => setUsers(students))
      .catch((err) => console.log(err));
  }, []);

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
