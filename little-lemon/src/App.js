import "./App.css";
import { useReducer } from "react";
import BookingPage from "./pages/BookingPage";


const reducer = (state, action) => {
  if(action.type === "updateTimes"){
    return{
      availableTimes: ["17:00", "18:00","19:00","20:00","21:00","22:00"]
    }
  }
  else if(action.type === "initializeTimes"){
    return{
      availableTimes: ["17:00", "18:00","19:00","20:00","21:00","22:00"]
    }
  }
  else throw Error('Unknown action.');
}

function App() {
  const [state, dispatch] = useReducer(reducer, {availableTimes:["17:00", "18:00","19:00","20:00","21:00","22:00"]});

  const updateTimes = () => {
    dispatch({type: "updateTimes"})
  }

  return (
    <div>
      <BookingPage availableTimes={state.availableTimes} handleTimes={updateTimes} />
    </div>
  );
}

export default App;
