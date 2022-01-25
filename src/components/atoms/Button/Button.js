import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledButton } from './Button.styles.js';

export const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);
