import FoodImage from "../../../assets/images/restauranfood.jpg"
import Button from "../Button";
import { Image, ScrollerImageWrapper, ScrollerTextWrapper, ScrollerWrapper } from "./Scroller.styled";

const Scroller = () => {
  const nagigateOnClick  = () => {

  }

  return <ScrollerWrapper >
    <ScrollerTextWrapper>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
      on traditional recipes served with a modern twist.</p>
      <Button disabled={false} label="Reserve a table" handleClick={() => nagigateOnClick}/>
    </ScrollerTextWrapper>
    <ScrollerImageWrapper>
      <Image src= {FoodImage} alt="Image of the restaurant's delicious food."/>
    </ScrollerImageWrapper>
  </ScrollerWrapper>
}

export default Scroller;