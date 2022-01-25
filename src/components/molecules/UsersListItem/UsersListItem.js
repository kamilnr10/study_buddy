import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>{attendance}</p>
      </StyledInfo>
      <Button onClick={() => deleteUser(name)} />
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
