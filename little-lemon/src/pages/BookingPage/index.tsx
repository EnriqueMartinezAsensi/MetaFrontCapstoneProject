import { useState } from "react";
import Calendar from "../components/Calendar";
import MenuBar from "../components/MenuBar";
import { Spacer } from "../MainPage/MainPage.styled";
import Counter from "../components/Counter";
import FormBundler from "../components/FormBundler";
import SelectStyled from "../components/SelectStyled";
import { CalendarHolder, FormLabel, FromSeparator, ReservationsHolder, ReserveButton } from "./BookingPage.styled";
import SelectFromList from "../components/SelectFromList";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [CalendarValue, setCalendarValue] = useState<Date>();
  const [gests, setGuests] = useState<number>(2);
  const [daySlice, setDaySlice] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = ()  => {
    navigate("/confirm");
  }

  return <ReservationsHolder className="">
    <MenuBar/>
    <Spacer />
    <FromSeparator active={true}>
      <FormBundler vertical={false}>
        <SelectStyled label="Which Restaurant?" options={["Chicago", "New York", "Palm Beach"]}/>
      </FormBundler>
      <FormBundler vertical={false}>
        <FormLabel>Guests</FormLabel>
        <Counter value={gests} onChange={setGuests}></Counter>
      </FormBundler>
      <FormBundler vertical={true}>
        <FormLabel>When?</FormLabel>
        <SelectFromList options={["Breakfast", "Lunch", "Dinner"]} value={daySlice} onChange={setDaySlice}></SelectFromList>
      </FormBundler>
      <CalendarHolder>
        <Calendar onChange={(value) => setCalendarValue(value)} value={CalendarValue || new Date(Date.now())}></Calendar>
      </CalendarHolder>
      <FormBundler vertical={true}>
        <FormLabel>Select hour</FormLabel>
        <SelectFromList options={["13:00", "13:30", "14:00", "14:30", "15:00","15:30", "16:00"]} value={hour} onChange={setHour}></SelectFromList>
      </FormBundler>
      <ReserveButton  disabled={!CalendarValue||!daySlice||!hour} handleClick={handleClick} label="Reserve"></ReserveButton>
    </FromSeparator>
    <FromSeparator active={true}>

    </FromSeparator>
    
  </ReservationsHolder>
}

export default BookingPage;