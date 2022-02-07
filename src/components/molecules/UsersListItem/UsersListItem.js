import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ handleOpenStudentDetails, userData: { id, name, attendance, average, group, grades } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper onClick={handleOpenStudentDetails}>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}%</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.number,
    name: PropTypes.string,
    attendance: PropTypes.number,
  }),
};

export default UsersListItem;
