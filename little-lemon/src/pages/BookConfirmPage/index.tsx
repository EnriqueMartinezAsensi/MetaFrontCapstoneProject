import { useState } from "react";
import Counter from "../components/Counter";
import MenuBar from "../components/MenuBar";
import { Spacer } from "../MainPage/MainPage.styled";
import { BookConfirmHolder, CheckboxStyled, ConsentHolder, DataDisplayer, FormButton, InputStyled, ReserveConfirmHolder, SpecialLineHolder, SpecialNeedsHolder, UserInfoHolder } from "./BookConfirm.styled";
import { useForm, SubmitHandler } from "react-hook-form"
import { useLocation } from "react-router-dom";
import { FormType } from "../../types/FormType";
import { sendReservation } from "../../api/postCalls";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  firstName: string
  email: string
  phone: string
}

const BookConfirmPage = () => {
  const location = useLocation();
  const reservation: FormType = location.state.formData;
  const [wheelchairs, setWheelchairs] = useState<number>(0);
  const [babyStroller, setBabyStroller] = useState<number>(0);
  const [highchair, setHighchair] = useState<number>(0);
  const { register, handleSubmit } = useForm<IFormInput>();
  const [isConsent, setIsConsent] = useState<boolean>(false);
  const [isConditions, setIsConditions] = useState<boolean>(false);
  const isNotReady = isConditions && isConsent;
  const [isReserveDisplay, setIsReserveDisplay] = useState<boolean>(false);
  const navigate = useNavigate();


  const dateFormated = reservation.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    reservation.name = data.firstName;
    reservation.email = data.email;
    reservation.phone = data.phone;
    reservation.specialneeds = {
      wheelchair : wheelchairs,
      babyStroller : babyStroller,
      highChair : highchair,
    }
    sendReservation(reservation);
    setIsReserveDisplay(true);
  }

  return <BookConfirmHolder>
    <MenuBar/>
    <Spacer />
    <UserInfoHolder $active={isReserveDisplay} onSubmit={handleSubmit(onSubmit)}>
      <DataDisplayer>{`Reservation at little lemon ${reservation.zone}, for ${reservation.guest} people, on ${dateFormated}, at ${reservation.hour}.`}</DataDisplayer>
      <label>Name & Surname *</label>
      <InputStyled {...register("firstName", { required: true, maxLength: 20 })} />
      <label>Email *</label>
      <InputStyled {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
      <label>Phone number</label>
      <InputStyled {...register("phone", { pattern: /^\+?[1-9][0-9]{7,14}$/})} />
      
      <SpecialNeedsHolder>
        <h3>SPECIAL NEEDS</h3>
        <SpecialLineHolder>
          <Counter value={wheelchairs} onChange={(num) => setWheelchairs( num < 0 || num > 5 ? 0 : num )}></Counter>
          <label>Wheelchairs</label>
        </SpecialLineHolder> 
        <hr></hr>
        <SpecialLineHolder>
          <Counter value={babyStroller} onChange={(num) => setBabyStroller( num < 0 || num > 5 ? 0 : num )}></Counter>
          <label>Baby Stroller</label>
        </SpecialLineHolder>
        <hr></hr>
        <SpecialLineHolder>
          <Counter value={highchair} onChange={(num) => setHighchair( num < 0 || num > 5 ? 0 : num )}></Counter>
          <label>High Chair</label>
        </SpecialLineHolder>
      </SpecialNeedsHolder>
      <ConsentHolder>
        <CheckboxStyled type="checkbox"  onChange={() => setIsConsent(!isConsent)}/>
        <label>I consent to the processing of my personal data.</label>
      </ConsentHolder>
      <ConsentHolder>
        <CheckboxStyled type="checkbox"  onChange={() => setIsConditions(!isConditions)}/>
        <label>I agree to the restaurant's terms and conditions.</label>
      </ConsentHolder>
      <FormButton type="submit" disabled={!isNotReady} value="Send Reservation"/>
    </UserInfoHolder>
    <ReserveConfirmHolder $active={isReserveDisplay}>
      <DataDisplayer>{`Your reservation has been confirmed ${reservation.name}! At little lemon ${reservation.zone}, for ${reservation.guest} people, on ${dateFormated}, at ${reservation.hour}. Further contact will be sent to ${reservation.email}`}</DataDisplayer>
      <Button disabled={false} handleClick={() => navigate("/")} label="Ok!"></Button>
    </ReserveConfirmHolder>
  </BookConfirmHolder>
}

export default BookConfirmPage;