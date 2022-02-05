import { render, screen } from 'test-utils.js';
import { SearchNav } from './SearchBar';
import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchNav />);
  });
});
