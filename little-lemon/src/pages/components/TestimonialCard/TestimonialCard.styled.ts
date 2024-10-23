import styled from "styled-components";

export const TestimonialCardWrapper = styled.div`
  width: 20%;
  margin: 0 0 2rem 0;
  background-color: ${({theme}) => theme.colors.common.grey};
  text-align: center;
  border-radius: ${({theme}) => theme.radiuses.medium}px;
  @media(max-width: ${({theme})=> theme.media.first}px) {
    width: 40%;
  }
`

export const TestimonialCardTitle = styled.h3`
  font-family: ${({theme}) => theme.text.normal.fontFamily};
  font-size: ${({theme}) => theme.text.normal.fontSize};
  font-weight: 800;
`

export const TestimonialCardText = styled.p`
  margin: 1rem;
`