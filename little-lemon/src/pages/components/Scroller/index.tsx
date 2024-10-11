
import Button from "../Button";
import { ButtonContainer, HeadSubtitle, HeadTitle, Image, ScrollerImageWrapper, ScrollerTextWrapper, ScrollerWrapper } from "./Scroller.styled";

type ScrollerProps = {
  title:  string,
  subtitle: string,
  text: string,
  image: string,
  dark: boolean,
}

const Scroller = ({title, subtitle, text, image, dark}:ScrollerProps) => {
  const nagigateOnClick  = () => {

  }

  return <ScrollerWrapper >
    <ScrollerTextWrapper dark={dark}>
      <HeadTitle>{title}</HeadTitle>
      <HeadSubtitle>{subtitle}</HeadSubtitle>
      <p>{text}</p>
      <ButtonContainer>
        <Button disabled={false} label="Reserve a table" handleClick={() => nagigateOnClick}/>
      </ButtonContainer>
    </ScrollerTextWrapper>
    <ScrollerImageWrapper>
      <Image src= {image} alt="Image of the restaurant's delicious food."/>
    </ScrollerImageWrapper>
  </ScrollerWrapper>
}

export default Scroller;