import { useState } from "react";
import Calendar from "../components/Calendar";
import MenuBar from "../components/MenuBar";
import { Spacer } from "../MainPage/MainPage.styled";
import Counter from "../components/Counter";
import FormBundler from "../components/FormBundler";
import SelectStyled from "../components/SelectStyled";
import { CalendarHolder, FormLabel, ReservationsHolder } from "./BookingPage.styled";
import SelectFromList from "../components/SelectFromList";

const BookingPage = () => {
  const [CalendarValue, setCalendarValue] = useState<Date>();
  const [gests, setGuests] = useState<number>(2);
  const [hour, setHour] = useState<string>("");

  return <ReservationsHolder>
    <MenuBar/>
    <Spacer />
    <FormBundler vertical={false}>
      <SelectStyled label="Which Restaurant?" options={["Chicago", "New York", "Palm Beach"]}/>
    </FormBundler>
    <FormBundler vertical={false}>
      <FormLabel>Guests</FormLabel>
      <Counter value={gests} onChange={setGuests}></Counter>
    </FormBundler>
    <FormBundler vertical={true}>
      <FormLabel>Select hour</FormLabel>
      <SelectFromList options={["uno", "dos", "tres"]} value={hour} onChange={setHour}></SelectFromList>
    </FormBundler>
    <CalendarHolder>
      <Calendar onChange={(value) => setCalendarValue(value)} value={CalendarValue || new Date(Date.now())}></Calendar>
    </CalendarHolder>
  </ReservationsHolder>
}

export default BookingPage;