import { useCallback, useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api/api_fake";

const reducer = (previousState, action) => {
  if (action.type === "updateTimes") {
    return previousState.filter((value) => value !== action.payload);
  } else if (action.type === "initializeTimes") {
    return action.payload;
  } else throw Error("Unknown action.");
};

const useBooking = () => {
  const [date, setDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(reducer,[] );

  const initializeTimes = useCallback((date) => {
    fetchAPI(date).then((value) => dispatch({ type: "initializeTimes", payload: value }));
    console.log(availableTimes);
  }, []);

  const updateTimes = (time) => {
    dispatch({ type: "updateTimes", payload: time });
  };

  const bookHandle = async (formdata) => {
    updateTimes(formdata.time);
    return await submitAPI(formdata);
  }

  useEffect(() => {
    initializeTimes(date);
  }, [date, initializeTimes]);

  return { availableTimes, bookHandle, date, setDate };
};

export default useBooking;
