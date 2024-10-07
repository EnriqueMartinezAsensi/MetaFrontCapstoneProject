import styled from "styled-components";

type WrapperProps = {
  bgColor: "light" | "dark";
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  background-color: ${({ bgColor }) => { 
    if(bgColor === "light") return ({theme}) => theme.colors.secondary.main;
    return ({theme}) => theme.colors.primary.main;
  }};
`

export const Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  max-width: 1027px;
  min-width: 660px;
  margin: auto;
`