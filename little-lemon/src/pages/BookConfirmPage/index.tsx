import MenuBar from "../components/MenuBar";
import { Spacer } from "../MainPage/MainPage.styled";
import { BookConfirmHolder } from "./BookConfirm.styled";
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  firstName: string
  email: string
  phone: string
}



const BookConfirmPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)



  return <BookConfirmHolder>
    <MenuBar/>
    <Spacer />
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("email", { pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
      <input {...register("phone", { pattern: /^\+?[1-9][0-9]{7,14}$/})} />
      <input type="submit" />
    </form>
  </BookConfirmHolder>
}

export default BookConfirmPage;