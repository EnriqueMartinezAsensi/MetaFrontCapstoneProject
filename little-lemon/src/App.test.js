import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

let selectedHour;

test('Renders the BookingForm heading', () => {
  render(<App />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes initializes the time slot list', () => {
  render(<App />);
  const timeSelectElement = screen.getByLabelText('Choose time');
  const options = screen.getAllByRole('option');
  expect(options[0].selected).toBe(true);
  userEvent.selectOptions(timeSelectElement, options[0].value);
  userEvent.click(screen.getByLabelText("Make Your reservation"));
  const aproovedTitle = screen.getByText("Table booked on")
  expect(aproovedTitle).toBeInTheDocument();
})

test('updateTimes updates the list of times.', () => {
  render(<App />);
  userEvent.selectOptions(screen.getByTestId("res-time"), ["option1"]);
  const firstAvailableHour = screen.getByTestId("res-time");
  expect(selectedHour).not.toMatch(firstAvailableHour);
})