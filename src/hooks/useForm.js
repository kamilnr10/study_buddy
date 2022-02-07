import React, { useState, useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  console.log(action.field);
  const { inputChange, clearValues, consentToggle, throwError, initialValues } = actionTypes;
  switch (action.type) {
    case inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case clearValues:
      return {
        ...action.initialValues,
      };

    case consentToggle:
      return {
        ...state,
        consent: !action.consent,
      };
    case throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    console.log(formValues.consent);
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = (initialValues) => {
    console.log(initialValues);
    dispatch({ type: actionTypes.clearValues, initialValues });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
