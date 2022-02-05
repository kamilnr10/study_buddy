import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import search from 'assets/icons/search.png';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

const SearchList = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
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

  div {
    display: flex;
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

const SearchResultItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.white : theme.colors.darkGrey)};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.darkGrey : 'white')};
  width: 100%;
  padding: 20px 5px;
  z-index: 9999;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;

export const SearchNav = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <MainBar>
      <h4>
        Study
        <br /> buddy
      </h4>
      <div {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" />
        <SearchList isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultItem>
            ))}
        </SearchList>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
    </MainBar>
  );
};
export const SearchBar = () => {
  return <></>;
};
