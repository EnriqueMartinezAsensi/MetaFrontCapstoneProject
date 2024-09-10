import { useCallback, useEffect, useReducer, useState } from "react";
import { fetchAPI } from "../api/api_fake";

const reducer = (state, action) => {
  if (action.type === "updateTimes") {
    return {
      availableTimes: state.availableTimes.filter((value) => value !== action.payload),
    };
  } else if (action.type === "initializeTimes") {
    return {
      availableTimes: action.payload,
    };
  } else throw Error("Unknown action.");
};

const useBooking = () => {
  const [date, setDate] = useState(new Date());
  const [state, dispatch] = useReducer(reducer, { availableTimes: [] });

  const initializeTimes = useCallback(async (date) => {
    fetchAPI(date).then((value) => dispatch({ type: "initializeTimes", payload: value }));
    console.log(state.availableTimes);
  }, []);

  const updateTimes = (time) => {
    dispatch({ type: "updateTimes", payload: time });
  };

  useEffect(() => {
    initializeTimes(date);
  }, [date, initializeTimes]);

  return { availableTimes: state.availableTimes, updateTimes, date, setDate };
};

export default useBooking;
