import React from 'react';
import styled from 'styled-components';

const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  margin: 10px 0;
  padding: 40px 20px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 40px 400px;
  grid-row-gap: 15px;

  h2 {
    padding: 0;
    margin: 10px 0 0;
    text-align: center;
  }
`;

const NewsWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const NewsSection = () => {
  return (
    <Wrapper>
      <h2>News Section</h2>
      <NewsWrapper>
        <ViewWrapper>Test</ViewWrapper>
        <ViewWrapper>Test</ViewWrapper>
        <ViewWrapper>Test</ViewWrapper>
        <ViewWrapper>Test</ViewWrapper>
        <ViewWrapper>Test</ViewWrapper>
      </NewsWrapper>
    </Wrapper>
  );
};

export default NewsSection;
