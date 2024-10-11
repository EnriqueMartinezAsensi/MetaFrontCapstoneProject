import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar"
import Scroller from "../components/Scroller";
import SectionWrapper from "../components/SectionWrapper"
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import FoodImage from "../../assets/images/restauranfood.jpg"
import AboutImg1 from "../../assets/images/Mario and Adrian A.jpg"
import AboutImg2 from "../../assets/images/Mario and Adrian b.jpg"
import { Spacer } from "./MainPage.styled";
import About from "../components/About";

const MainPage = () => {
  return <>
    <MenuBar />
    <Spacer />
    <SectionWrapper background="dark">
      <Scroller title="Little Lemon" subtitle="Chicago" text="We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
      on traditional recipes served with a modern twist." image={FoodImage} dark={true}/>
    </SectionWrapper>
    <SectionWrapper background="light">
      <Specials />
    </SectionWrapper>
    <SectionWrapper background="dark">
      <Testimonials />
    </SectionWrapper>
    <SectionWrapper background="light">
      <About title="Little Lemon" subtitle="Chicago" text="Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later." image1={AboutImg1} image2={AboutImg2} dark={false}/>
    </SectionWrapper>
    <SectionWrapper background="dark">
      <Footer />
    </SectionWrapper>
  </>
}

export default MainPage;