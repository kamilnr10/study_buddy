import React, { useCallback } from 'react';
import axios from 'axios';

const studentsAPI = axios.create({});

// Add a request interceptor
studentsAPI.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      console.log(result);
      return result.data.groups;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudents = useCallback(async (groupId) => {
    try {
      const result = await studentsAPI.get(`/groups/${groupId}`);
      // console.log(result);
      return result.data.students;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await studentsAPI.get(`/students/${studentId}`);
      // console.log(result);
      return result.data.students;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getStudents,
    getGroups,
    getStudentById,
    findStudents,
  };
};
