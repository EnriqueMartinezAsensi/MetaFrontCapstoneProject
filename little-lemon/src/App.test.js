import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the BookingForm heading', () => {
  render(<App />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})