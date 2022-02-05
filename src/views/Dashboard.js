import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams, Link } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { getGroups, getStudents } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      console.log(groups);
      setGroups(groups);
    })();
  }, [getGroups]);

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
      console.log(students);
    })();
  }, [id, getStudents]);

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

  return <UsersList students={students} groups={groups} />;
};

export default Dashboard;
