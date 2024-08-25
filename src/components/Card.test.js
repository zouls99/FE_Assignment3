// import React from 'react';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Card from './Card';

// const el = {
//   image: 'https://via.placeholder.com/150',
//   name: 'Test Recipe',
//   rating: 4.5,
//   tags: ['Tag1', 'Tag2', 'Tag3'],
//   id: 1
// };

// test('renders the component Card & given props', () => {
//   render(<Card el={el} />);

// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const mockRecipe = {
  id: 1,
  image: 'https://example.com/image.jpg',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['tag1', 'tag2']
};

test('renders Card component with recipe data', () => {
  render(<Card el={mockRecipe} />);

  // Testing the image
  const recipeImage = screen.getByTestId('img-recipe-1');
  expect(recipeImage).toBeInTheDocument();
  expect(recipeImage).toHaveAttribute('src', 'https://example.com/image.jpg');
  expect(recipeImage).toHaveAttribute('alt', 'Test Recipe');

  // Testing the title
  const recipeTitle = screen.getByTestId('title-recipe-1');
  expect(recipeTitle).toBeInTheDocument();
  expect(recipeTitle).toHaveTextContent('Test Recipe');

  // Testing the rating
  const recipeRating = screen.getByTestId('rating-recipe-1');
  expect(recipeRating).toBeInTheDocument();
  expect(recipeRating).toHaveTextContent('4.5');

  // Testing tags
  const tagItems = screen.getAllByTestId(/tag-recipe-/);
  expect(tagItems).toHaveLength(2);
  expect(tagItems[0]).toHaveTextContent('tag1');
  expect(tagItems[1]).toHaveTextContent('tag2');

  // Testing the link
  const recipeLink = screen.getByTestId('link-recipe-1');
  expect(recipeLink).toBeInTheDocument();
  expect(recipeLink).toHaveAttribute('href', 'https://dummyjson.com/recipes/1');
});
