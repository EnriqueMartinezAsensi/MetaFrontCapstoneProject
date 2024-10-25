import styled from "styled-components";

export const BurgerSVGContainer = styled.svg`
  fill:transparent;
  transition: ${({theme})=> theme.transitions.normal}s;
  
  &:hover{
    fill: ${({theme})=> theme.colors.button.normal.background};
  }
`

