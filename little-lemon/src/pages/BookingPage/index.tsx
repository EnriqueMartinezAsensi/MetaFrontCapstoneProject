import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import MenuBar from "../components/MenuBar";
import { Spacer } from "../MainPage/MainPage.styled";
import Counter from "../components/Counter";
import FormBundler from "../components/FormBundler";
import SelectStyled from "../components/SelectStyled";
import { CalendarHolder, FormLabel, FromSeparator, ReservationsHolder, ReserveButton } from "./BookingPage.styled";
import SelectFromList from "../components/SelectFromList";
import { useNavigate } from "react-router-dom";
import { FormType } from "../../types/FormType";
import { getHours } from "../../api/postCalls";


const BookingPage = () => {
  const [restaurant, setRestaurant] = useState<string|undefined>(undefined);
  const [CalendarValue, setCalendarValue] = useState<Date>(new Date(Date.now()));
  const [gests, setGuests] = useState<number>(2);
  const [daySlice, setDaySlice] = useState<string>("");
  const [hourList, setHourList] = useState<string[]>([""]);
  const [hour, setHour] = useState<string>("");
  const navigate = useNavigate();

  const handleGuests = (guests:number) =>{
    const rightGuest = gests < 2 || guests > 10 ? 2 : guests;
    setGuests(rightGuest)
  }

  const handleClick = ()  => {
    const formData:FormType = {
      date: CalendarValue,
      guest: gests,
      hour: hour,
      zone: restaurant,
      name:"",
      email:"",
    }
    navigate("/confirm", {state: {formData}});
  }

  useEffect(() =>{
    getHours(CalendarValue).then((hours) => setHourList(hours))
  }, [CalendarValue])

  return <ReservationsHolder className="">
    <MenuBar/>
    <Spacer />
    <FromSeparator $active={true}>
      <FormBundler vertical={false}>
        <SelectStyled label="Which Restaurant?" options={["Chicago", "New York", "Palm Beach"]} value={restaurant} onChange={({target}) =>  setRestaurant(target.value)}/>
      </FormBundler>
      <FormBundler vertical={false}>
        <FormLabel>Guests</FormLabel>
        <Counter value={gests} onChange={handleGuests} />
      </FormBundler>
      <FormBundler vertical={true}>
        <FormLabel>When?</FormLabel>
        <SelectFromList options={["Breakfast", "Lunch", "Dinner"]} value={daySlice} onChange={setDaySlice}></SelectFromList>
      </FormBundler>
      <CalendarHolder>
        <Calendar onChange={(value) => setCalendarValue(value)} value={CalendarValue}></Calendar>
      </CalendarHolder>
      <FormBundler vertical={true}>
        <FormLabel>Select hour</FormLabel>
        <SelectFromList options={hourList} value={hour} onChange={setHour}></SelectFromList>
      </FormBundler>
      <ReserveButton  disabled={!CalendarValue||!daySlice||!hour||!restaurant} handleClick={handleClick} label="Reserve"></ReserveButton>
    </FromSeparator>
  </ReservationsHolder>
}

export default BookingPage;