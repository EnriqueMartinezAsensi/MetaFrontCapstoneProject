import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage = ({availableTimes, submitForm, date, setDate}) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({date, time, guests, occasion}).then((result) => {
      if(result) navigate("/confirm");
    });
  }

  const handleGuests = (value) => {
    if(value === "" || isNaN(value)) return "";

    const numericalValue = Number(value);
    if(numericalValue < 1) return 1;
    if(numericalValue > 10) return 10;
    return numericalValue;
  }


  useEffect(() => {
    setTime(availableTimes?.length ? availableTimes[0] : "");
  }, [availableTimes])
  
  return (
      <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }} aria-label="Table booking form">
        <label htmlFor='res-date'>Choose date</label>
        <input 
          type='date' 
          id='res-date'
          value={date.toISOString().split('T')[0]} 
          min={new Date().toISOString().split("T")[0]} 
          onChange={({target}) => setDate(new Date(target.value))} 
          aria-label="Choose a date">
        </input>
        <label htmlFor='res-time'>Choose time</label>
        <select id='res-time ' value={time} onChange={({target}) => {
            setTime(target.value);
          }} aria-label="Choose an hour">
          { availableTimes ?
              availableTimes.map((each) => <option key={each}>{`${each}`}</option>):
              null
          }
        </select>
        <label htmlFor='guests'>Number of guests</label>
        <input 
          placeholder='1' 
          min='1' 
          max='10' 
          id='guests' 
          value={guests} 
          onChange={({target}) => setGuests(handleGuests(target.value))}
          aria-label="Number of guests"
          >
        </input>
        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion' value={occasion} onChange={({target}) => setOccasion(target.value)} aria-label="Inform of a special">
          <option value="">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input id="button" type='submit' value='Make Your reservation' disabled={!time?.length || !guests} aria-label="On Click"></input>
      </form>
  );
}

export default BookingPage;