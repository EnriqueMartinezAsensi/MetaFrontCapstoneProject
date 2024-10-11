
import { AboutHeadSubtitle, AboutHeadTitle, AboutImage1, AboutImage2, AboutImageWrapper, AboutTextWrapper, AboutWrapper } from "./about.styled";

type AboutProps = {
  title:  string,
  subtitle: string,
  text: string,
  image1: string,
  image2: string,
  dark: boolean,
}

const About = ({title, subtitle, text, image1, image2, dark}:AboutProps) => {
  return <AboutWrapper >
    <AboutTextWrapper dark={dark}>
      <AboutHeadTitle>{title}</AboutHeadTitle>
      <AboutHeadSubtitle>{subtitle}</AboutHeadSubtitle>
      <p>{text}</p>
    </AboutTextWrapper>
    <AboutImageWrapper>
      <AboutImage1 src= {image1} alt="Image of the restaurant's delicious food."/>
      <AboutImage2 src= {image2} alt="Image of the restaurant's delicious food."/>
    </AboutImageWrapper>
  </AboutWrapper>
}

export default About;