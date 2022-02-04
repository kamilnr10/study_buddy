import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import search from 'assets/icons/search.png';
import debounce from 'lodash.debounce';

const SearchList = styled.ul`
  visibility: 'visible';
  z-index: 1000;
  max-height: 140px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 160px;
  position: absolute;
  left: 80px;
  top: 35px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  li {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: white;
    width: 100%;
    padding: 20px 5px;
    z-index: 9999;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
  }
`;

const MainBar = styled.div`
  width: 100%;
  height: 55px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0 15px;
  }

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.m};
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }

  button {
    border: none;
    background-color: transparent;

    img {
      width: 35px;
      height: 35px;
      margin: 0 15px;
    }
  }
`;

export const SearchNav = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  return (
    <MainBar>
      <h4>
        Study
        <br /> buddy
      </h4>
      <Input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} />
      {searchPhrase && matchingStudents.length ? (
        <SearchList>
          {matchingStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </SearchList>
      ) : null}
      <button>
        <img src={search} alt="" />
      </button>
    </MainBar>
  );
};
const SearchBar = () => {
  return <></>;
};

export default SearchBar;
