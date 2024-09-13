import { renderHook, waitFor } from '@testing-library/react';
import { fetchAllAPI, fetchAPI, submitAPI } from '../api/api_fake';
import useBooking from './useBooking';
import { act } from 'react';

jest.mock('../api/api_fake', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(() => Promise.resolve([])),
  fetchAllAPI: jest.fn(),
}));

describe("useBooking", () => {
  it("should initialize time based on fetchAPI result when the hook loads", async () => {
    const availableTimes = ["17:00", "19:00", "21:30"];

    fetchAPI.mockResolvedValue(availableTimes);
    fetchAllAPI.mockResolvedValue([]);

    const { result } = renderHook(useBooking);
    
    await waitFor(() => {
      const returnedAvailableTimes = result.current.availableTimes;
      expect(returnedAvailableTimes).toMatchObject(availableTimes);
    });

    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });
  it("should remove the time from the list when it's chosen", async () => {
    const availableTimes = ["17:00", "19:00", "21:30"];

    fetchAPI.mockResolvedValue(availableTimes);
    fetchAllAPI.mockResolvedValue([]);
    submitAPI.mockResolvedValue(true);

    const { result } = renderHook(useBooking);
    
    await waitFor(() => {
      const returnedAvailableTimes = result.current.availableTimes;
      expect(returnedAvailableTimes).toMatchObject(availableTimes);
    });

    await act(async () => {
      await result.current.bookHandle({time:"17:00"});
    })

    await waitFor(() => {
      const returnedAvailableTimes = result.current.availableTimes;
      expect(returnedAvailableTimes).toMatchObject(["19:00", "21:30"]);
    });
    
    expect(submitAPI).toHaveBeenCalledTimes(1);
  });
});
