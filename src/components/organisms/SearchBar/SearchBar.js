import React, { useContext } from 'react';
import styled from 'styled-components';
import { UsersContext } from 'providers/UsersProvider';
import { Input } from 'components/atoms/Input/Input';
import search from 'assets/icons/search.png';

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
  const { searchBar, handleSearchBar } = useContext(UsersContext);

  return (
    <MainBar>
      <h4>
        Study
        <br /> buddy
      </h4>
      {searchBar ? <Input /> : null}
      <button onClick={handleSearchBar}>
        <img src={search} alt="" />
      </button>
    </MainBar>
  );
};
const SearchBar = () => {
  return <></>;
};

export default SearchBar;
