import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>{attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
