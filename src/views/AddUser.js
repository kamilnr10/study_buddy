import React, { useState, useEffect, useContext } from 'react';
import { ViewWrapper, StyledList, StyledTitle } from 'components/organisms/UsersList//UsersList.styles';
import { FormField } from 'components/molecules/FormField/FormField';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
