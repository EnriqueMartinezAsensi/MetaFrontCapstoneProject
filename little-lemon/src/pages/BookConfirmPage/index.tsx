import { useState } from "react";
import Counter from "../components/Counter";
import MenuBar from "../components/MenuBar";
import { Spacer } from "../MainPage/MainPage.styled";
import { BookConfirmHolder, CheckboxStyled, ConsentHolder, InputStyled, SpecialLineHolder, SpecialNeedsHolder, UserInfoHolder } from "./BookConfirm.styled";
import { useForm, SubmitHandler } from "react-hook-form"
import Button from "../components/Button";

interface IFormInput {
  firstName: string
  email: string
  phone: string
}

const BookConfirmPage = () => {
  const [wheelchairs, setWheelchairs] = useState<number>(0);
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return <BookConfirmHolder>
    <MenuBar/>
    <Spacer />
    <UserInfoHolder onSubmit={handleSubmit(onSubmit)}>
      <label>Name & Surname *</label>
      <InputStyled {...register("firstName", { required: true, maxLength: 20 })} />
      <label>Email *</label>
      <InputStyled {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
      <label>Phone number</label>
      <InputStyled {...register("phone", { pattern: /^\+?[1-9][0-9]{7,14}$/})} />
      
      <SpecialNeedsHolder>
        <h3>SPECIAL NEEDS</h3>
        <SpecialLineHolder>
          <Counter value={wheelchairs} onChange={setWheelchairs}></Counter>
          <label>Wheelchairs</label>
        </SpecialLineHolder>
        <hr></hr>
        <SpecialLineHolder>
          <Counter value={wheelchairs} onChange={setWheelchairs}></Counter>
          <label>Wheelchairs</label>
        </SpecialLineHolder>
        <hr></hr>
        <SpecialLineHolder>
          <Counter value={wheelchairs} onChange={setWheelchairs}></Counter>
          <label>Wheelchairs</label>
        </SpecialLineHolder>
      </SpecialNeedsHolder>
      <ConsentHolder>
        <CheckboxStyled type="checkbox" />
        <label>I consent to the processing of my personal data.</label>
      </ConsentHolder>
      <ConsentHolder>
        <CheckboxStyled type="checkbox" />
        <label>I agree to the restaurant's terms and conditions.</label>
      </ConsentHolder>
      <Button disabled={false} handleClick={() => {}} label="Send Reservation"></Button>
      <InputStyled type="submit" />
    </UserInfoHolder>
  </BookConfirmHolder>
}

export default BookConfirmPage;