import { render, screen } from '@testing-library/react';
import TestComponent from '../TestComponent';

describe('TestComponent', () => {
  test('renders TestComponent component', () => {
    render(<TestComponent />);
    expect(screen.getByText('TestComponent')).toBeDefined();
  });
});
