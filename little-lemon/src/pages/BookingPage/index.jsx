import { useState } from "react";

const BookingPage = ({availableTimes, handleTimes, date, setDate}) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleTimes();
  }
  
  return (
      <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label for='res-date'>Choose date</label>
        <input type='date' id='res-date' value={date.toISOString().split('T')[0]} onChange={({target}) => setDate(new Date(target.value))}></input>
        <label for='res-time'>Choose time</label>
        <select id='res-time ' value={time} onChange={({target}) => {
            setTime(target.value);
          }}>
          {availableTimes.map((each) => <option>{`${each}`}</option>)}
        </select>
        <label for='guests'>Number of guests</label>
        <input type='number' placeholder='1' min='1' max='10' id='guests' value={guests} onChange={({target}) => setGuests(target.value)}></input>
        <label for='occasion'>Occasion</label>
        <select id='occasion' value={occasion} onChange={({target}) => setOccasion(target.value)}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type='submit' value='Make Your reservation'></input>
      </form>
  );
}

export default BookingPage;