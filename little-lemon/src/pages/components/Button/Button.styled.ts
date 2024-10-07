import styled from "styled-components";


export const ButtonWrapper = styled.button`
  border-radius: ${({theme}) => theme.radiuses.medium}px;
  width: 50%;
  min-width: fit-content;
  height: 2.5rem;
  font-size: medium;
  font-weight: 600;
  color: ${({theme}) => theme.colors.button.normal.text};
  border: transparent;
  background-color: ${({theme}) => theme.colors.button.normal.background};
  transition: all ${({theme}) => theme.transitions.normal}s;
  &:hover{
    color: ${({theme}) => theme.colors.button.click.background};
  }
  &:disabled{
    background-color: ${({theme}) => theme.colors.button.disabled.background};
  }
`