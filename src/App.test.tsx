import React from 'react';
import { render, cleanup } from '@testing-library/react'
import App from './App';

afterEach(cleanup)

describe('This will test my <App /> Component', () => {
test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
})

