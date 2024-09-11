import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import BookingPage from "./pages/BookingPage";
import useBooking from "./hooks/useBooking";
import Confirm from "./pages/Confirm";

function App() {
  const { availableTimes, bookHandle, date, setDate } = useBooking();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<BookingPage availableTimes={availableTimes} submitForm={bookHandle} date={date} setDate={setDate} />}
        >
        </Route>
        <Route
          path="/confirm"
          element={<Confirm date={date.toISOString().split('T')[0]}></Confirm>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
