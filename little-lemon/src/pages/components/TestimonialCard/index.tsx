import { TestimonialCardText, TestimonialCardTitle, TestimonialCardWrapper } from "./TestimonialCard.styled";

type TestimonialCardProps = {
  name: string,
  comment: string,
}

const TestimonialCard = ({name, comment}:TestimonialCardProps) => {
  return <TestimonialCardWrapper>
    <TestimonialCardTitle>{name}</TestimonialCardTitle>
    <TestimonialCardText>{comment}</TestimonialCardText>
  </TestimonialCardWrapper>
}

export default TestimonialCard;