import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the BookingForm heading', () => {
  render(<App />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes initializes the time slot list', () => {
  render(<App />);
  const headingElement = screen.getByText("17:00");
  expect(headingElement).toBeInTheDocument();
})

test('updateTimes does nothing yet', () => {
  render(<App />);
  const headingElement = screen.getByText("21:00");
  expect(headingElement).toBeInTheDocument();
})