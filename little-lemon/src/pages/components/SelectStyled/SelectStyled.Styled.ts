import styled from "styled-components";

export const SelectMain = styled.select`
  padding: 0;
  margin: 0.23rem;
  background-color: ${({theme}) => theme.colors.common.transparent};
  border: transparent;
  color: ${({theme}) => theme.colors.common.black};
  font-family: ${({theme}) => theme.text.card.fontFamily} ;
  font-size: ${({theme}) => theme.text.card.fontSize};
`

export const OptionsStyled = styled.option`
  color: ${({theme}) => theme.colors.common.black};
  font-family: ${({theme}) => theme.text.card.fontFamily} ;
  font-size: ${({theme}) => theme.text.card.fontSize};
`