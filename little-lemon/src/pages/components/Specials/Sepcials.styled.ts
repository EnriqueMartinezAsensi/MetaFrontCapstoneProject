import styled from "styled-components";

export const SpecialsHeader = styled.h1`
  margin: 2rem;
  font-family: ${({theme}) => theme.text.title.fontFamily};
  font-size: ${({theme}) => theme.text.title.fontSize};
`

export const SepcialsCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 3rem 0;
  flex-wrap: wrap;
  @media(max-width: ${({theme})=> theme.media.first}px) {
    flex-direction: column;
    align-items: center;
  }
`