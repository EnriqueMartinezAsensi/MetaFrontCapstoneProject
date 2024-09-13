import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import BookingPage from '.';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('BookingPage Component', () => {
  const mockSubmitForm = jest.fn();
  const mockSetDate = jest.fn();
  const mockNavigate = jest.fn();

  const availableTimes = ["12:00", "13:00", "14:00"];
  const date = new Date('2023-09-15');

  beforeEach(() => {
    mockSubmitForm.mockClear();
    mockSetDate.mockClear();
    mockNavigate.mockClear();
  });

  test('renders the form and displays available times', () => {
    render(
      <BrowserRouter>
        <BookingPage
          availableTimes={availableTimes}
          submitForm={mockSubmitForm}
          date={date}
          setDate={mockSetDate}
        />
      </BrowserRouter>
    );

    availableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('should call submitForm with correct data on submit', async () => {
    mockSubmitForm.mockResolvedValue(true);

    render(
      <BrowserRouter>
        <BookingPage
          availableTimes={availableTimes}
          submitForm={mockSubmitForm}
          date={date}
          setDate={mockSetDate}
        />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText('Choose a date');
    const timeSelect = screen.getByLabelText('Choose an hour');
    const guestInput = screen.getByLabelText('Number of guests');
    const submitButton = screen.getByLabelText('On Click');

    fireEvent.change(dateInput, { target: { value: '2023-09-15' } });
    fireEvent.change(timeSelect, { target: { value: '13:00' } });
    fireEvent.change(guestInput, { target: { value: '5' } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: new Date('2023-09-15'),
      time: '13:00',
      guests: 5,
      occasion: 'None',
    });
  });

  test('disables submit button if no time is selected', () => {
    render(
      <BrowserRouter>
        <BookingPage
          availableTimes={[]}
          submitForm={mockSubmitForm}
          date={date}
          setDate={mockSetDate}
        />
      </BrowserRouter>
    );

    const submitButton = screen.getByLabelText('On Click');
    expect(submitButton).toBeDisabled();
  });
});