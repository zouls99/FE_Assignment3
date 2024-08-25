import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

test('renders NavBar component with search form', () => {
  const mockSearch = jest.fn();
  render(<NavBar search={mockSearch} />);

  const navTitle = screen.getByTestId('my-recipe');
  expect(navTitle).toBeInTheDocument();
  expect(navTitle).toHaveTextContent('My Recipe');

  const formSearch = screen.getByTestId('form-search');
  expect(formSearch).toBeInTheDocument();
});
