import styled from "styled-components";


export const ButtonWrapper = styled.button`
margin: 0.7rem;
  border-radius: ${({theme}) => theme.radiuses.medium}px;
  width: 50%;
  min-width: fit-content;
  height: 2.5rem;
  font-family: ${({theme}) => theme.text.card.fontFamily} ;
  font-size: ${({theme}) => theme.text.card.fontSize};
  font-weight: 800;
  color: ${({theme}) => theme.colors.button.normal.text};
  border-color: transparent;
  background-color: ${({theme}) => theme.colors.button.normal.background};
  transition: all ${({theme}) => theme.transitions.normal}s;
  &:hover{
    color: ${({theme}) => theme.colors.button.normal.background};
    background-color: ${({theme}) => theme.colors.button.click.background};
    border: 2px solid ${({theme}) => theme.colors.button.normal.background};
  }
  &:disabled{
    background-color: ${({theme}) => theme.colors.button.disabled.background};
  }
`