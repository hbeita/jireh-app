import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import { Header } from '..';

describe('Header', () => {
  test('renders HeaderComponent component', () => {
    render(<Header />);
    expect(screen.getByText('My App')).toBeDefined();
  });
});
