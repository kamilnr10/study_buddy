import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from './NewsSection';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

const query = `{ 
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
`;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when articles are not loaded', async () => {
    mock.onPost('https://graphql.datocms.com', { query }).reply(500);
    renderWithThemeProvider(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock
      .onPost('https://graphql.datocms.com', { query })
      .reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    renderWithThemeProvider(<NewsSection />);
    await waitFor(() => screen.queryAllByText(/Test/));
  });
});
