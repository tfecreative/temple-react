import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const siteContainer = container.querySelector('.site-content');
  expect(siteContainer).toBeInTheDocument();
});
