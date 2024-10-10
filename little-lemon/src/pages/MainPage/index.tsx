import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar"
import Scroller from "../components/Scroller";
import SectionWrapper from "../components/SectionWrapper"
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import { Spacer } from "./MainPage.styled";

const MainPage = () => {
  return <>
    <MenuBar />
    <Spacer />
    <SectionWrapper background="dark">
      <Scroller />
    </SectionWrapper>
    <SectionWrapper background="light">
      <Specials />
    </SectionWrapper>
    <SectionWrapper background="dark">
      <Testimonials />
    </SectionWrapper>
    <SectionWrapper background="light">
      <Specials />
    </SectionWrapper>
    <SectionWrapper background="dark">
      <Footer />
    </SectionWrapper>
  </>
}

export default MainPage;