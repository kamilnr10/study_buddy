import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sahuf dfaj asdj bvnjskco aoidfha dcbduo asdi a iahsf dsidofha oaihdhfnf nd pdan ds s ',
    image: 'https://zwierzaki.expert/wp-content/uploads/2018/12/Siberian-husky.jpg',
  },
  {
    title: 'Old computers at schoold',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sahuf dfaj asdj bvnjskco aoidfha dcbduo asdi a iahsf dsidofha oaihdhfnf nd pdan ds s ',
    image: null,
  },
  {
    title: 'New games on website',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sahuf dfaj asdj bvnjskco aoidfha dcbduo asdi a iahsf dsidofha oaihdhfnf nd pdan ds s ',
    image: null,
  },
  {
    title: 'Watch this movie',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sahuf dfaj asdj bvnjskco aoidfha dcbduo asdi a iahsf dsidofha oaihdhfnf nd pdan ds s ',
    image: null,
  },
];

const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  margin: 10px 0;
  padding: 40px 20px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const ArticleWrapper = styled(ViewWrapper)`
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;

export const ContentWrapper = styled.div`
  img {
    width: 100%;
    height: 140px;
    max-height: 360px;
    object-fit: cover;
  }
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p {
    margin: 0 0 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 50px 400px;

  ${NewsSectionHeader} {
    display: block;
    padding: 0;
    margin: 10px 0 0;
    text-align: center;
    box-shadow: 0 3px 8px -5px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
`;

const NewsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const API_TOKEN = '7cd8cf80a54919f0e2dbf2480379b0';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com',
        {
          query: `
      { 
        allArticles {
        id
        title
        category
        content
        image {
          id
          url
        }
      }
    }
      `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((err) => console.log(err));
  });

  return (
    <Wrapper>
      <NewsSectionHeader>News Section</NewsSectionHeader>
      <NewsWrapper>
        {articles.length > 0 ? (
          articles.map(({ title, category, content, image = null }) => (
            <ArticleWrapper key={title}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                {image ? <img src={image.url} alt="article" /> : null}
                <p>{content}</p>
              </ContentWrapper>
              <Button isBig>click me</Button>
            </ArticleWrapper>
          ))
        ) : (
          <TitleWrapper>Loading ...</TitleWrapper>
        )}
      </NewsWrapper>
    </Wrapper>
  );
};

export default NewsSection;
