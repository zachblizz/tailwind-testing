import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should have an array of 3 hello elements and should render at least one', () => {
  const { getAllByText } = render(<App />);
  const helloElements = getAllByText(/Hello/i);

  expect(helloElements).toHaveLength(3);
  expect(helloElements[0]).toBeInTheDocument();
});
