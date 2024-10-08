import FoodImage from "../../../assets/images/restauranfood.jpg"
import Button from "../Button";
import { ButtonContainer, HeadSubtitle, HeadTitle, Image, ScrollerImageWrapper, ScrollerTextWrapper, ScrollerWrapper } from "./Scroller.styled";

const Scroller = () => {
  const nagigateOnClick  = () => {

  }

  return <ScrollerWrapper >
    <ScrollerTextWrapper>
      <HeadTitle>Little Lemon</HeadTitle>
      <HeadSubtitle>Chicago</HeadSubtitle>
      <p>We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
      on traditional recipes served with a modern twist.</p>
      <ButtonContainer>
        <Button disabled={false} label="Reserve a table" handleClick={() => nagigateOnClick}/>
      </ButtonContainer>
    </ScrollerTextWrapper>
    <ScrollerImageWrapper>
      <Image src= {FoodImage} alt="Image of the restaurant's delicious food."/>
    </ScrollerImageWrapper>
  </ScrollerWrapper>
}

export default Scroller;