import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledButton } from './DeleteButton.styles.js';
import deleteUser from 'assets/icons/user-delete.png';

export const DeleteButton = (props) => (
  <StyledButton {...props}>
    <img src={deleteUser} alt="" />
  </StyledButton>
);
