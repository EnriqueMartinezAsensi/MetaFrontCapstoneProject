import {  renderHook, waitFor } from '@testing-library/react';
import { fetchAllAPI, fetchAPI } from '../api/api_fake';
import useBooking from './useBooking';

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
    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledTimes(1);
    });
  });
});