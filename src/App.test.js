// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from './App';

// test('renders learn react link', () => {
// //test('renders App component with Navbar, image banner, and Footer', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//   expect(banner).toHaveProperty('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg')
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders App component with NavBar, image banner, and Footer', () => {
  render(<App />);

  // Testing the image banner
  const banner = screen.getByTestId('image-banner');
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveAttribute('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg');
  expect(banner).toHaveAttribute('alt', 'banner');

  // Testing NavBar
  const navTitle = screen.getByTestId('my-recipe');
  expect(navTitle).toBeInTheDocument();
  expect(navTitle).toHaveTextContent('My Recipe');

  const formSearch = screen.getByTestId('form-search');
  expect(formSearch).toBeInTheDocument();

  // Testing Footer
  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toBeInTheDocument();
  expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');

  // Checking social media links
  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toBeInTheDocument();
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');

  const xLink = screen.getByTestId('link-x');
  expect(xLink).toBeInTheDocument();
  expect(xLink).toHaveAttribute('href', 'https://x.com');

  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toBeInTheDocument();
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
});
