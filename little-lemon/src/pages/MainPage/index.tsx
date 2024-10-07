import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar"
import Scroller from "../components/Scroller";
import SectionWrapper from "../components/SectionWrapper"
import { Spacer } from "./MainPage.styled";

const MainPage = () => {
  return <>
    <MenuBar />
    <Spacer></Spacer>
    <SectionWrapper background="dark">
      <Scroller />
    </SectionWrapper>
    <SectionWrapper background="light">
      <h1>This week's specials</h1>
    </SectionWrapper>
    <SectionWrapper background="dark">
      <Footer />
    </SectionWrapper>
  </>
}

export default MainPage;