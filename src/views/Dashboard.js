import React from 'react';
import PropTypes from 'prop-types';
import UsersList from 'components/organisms/UsersList/UsersList';
// import { UserShape } from 'types';

const Dashboard = ({ users, deleteUser, isLoading }) => {
  return <UsersList users={users} deleteUser={deleteUser} isLoading={isLoading} />;
};

// Dashboard.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
//   deleteUser: PropTypes.func,
// };

export default Dashboard;
