import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams, Link } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import useModal from 'components/organisms/Modal/useModal';
import { Title } from 'components/atoms/Title/Title';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { getGroups, getStudents, getStudentById } = useStudents();
  const { id } = useParams();
  const [currentStudent, setCurrenStudent] = useState([]);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      console.log(groups);
      setGroups(groups);
    })();
  }, [getGroups]);

  useEffect(() => {
    (async () => {
      // console.log(id);

      const students = await getStudents(id);
      setStudents(students);
      // console.log(students);
    })();
  }, [id, getStudents]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrenStudent(student);
    console.log(student);
    handleOpenModal();
  };

  // useEffect(() => {
  //   axios
  //     .get('/groups')
  //     .then(({ data }) => setGroups(data.groups))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`/students/${id || groups[0]}`)
  //     .then(({ data }) => setStudents(data.students))
  //     .catch((err) => console.log(err));
  // }, [id, groups]);

  return (
    <>
      <UsersList students={students} groups={groups} handleOpenStudentDetails={handleOpenStudentDetails} ariaHideApp={false} />

      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal} ariaHideApp={false}>
        <Title>
          {currentStudent.name} | Group {currentStudent.group}
        </Title>
        <p>{currentStudent.attendance}</p>
        <p>{currentStudent.average}</p>
        <p></p>
      </Modal>
    </>
  );
};

export default Dashboard;
