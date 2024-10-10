import styled from "styled-components";

export const TestimonialWrapper = styled.section`
  width: 100%;
`

export const TestimonalCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TestimonialsTitle = styled.h1`
  margin: 2rem;
  font-family: ${({theme}) => theme.text.subtitle.fontFamily};
  font-size: ${({theme}) => theme.text.title.fontSize};
  color: ${({theme}) => theme.colors.common.white};
`