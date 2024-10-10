import TestimonialCard from "../TestimonialCard"
import { TestimonalCardsWrapper, TestimonialsTitle, TestimonialWrapper } from "./Testimonials.styled"

const Testimonials = () => {
  return <TestimonialWrapper>
    <TestimonialsTitle>Testimonials</TestimonialsTitle>
    <TestimonalCardsWrapper>
      <TestimonialCard name="Kelly Foien" comment="Very good! I'll come here more often"/>
      <TestimonialCard name="John Jackson" comment="The service is outstanding "/>
      <TestimonialCard name="Jack Johnson" comment="You have to try the lemon desert."/>
      <TestimonialCard name="Lilly Duolinguo" comment="It was good I guess or something."/>
    </TestimonalCardsWrapper>
  </TestimonialWrapper>
}

export default Testimonials