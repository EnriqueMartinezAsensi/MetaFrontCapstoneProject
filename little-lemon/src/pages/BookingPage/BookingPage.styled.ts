import styled from "styled-components";

export const FormLabel = styled.label`
  color: ${({theme}) => theme.colors.common.black};
  font-family: ${({theme}) => theme.text.card.fontFamily} ;
  font-size: ${({theme}) => theme.text.card.fontSize};
`
export const CalendarHolder = styled.div`
  width: 96%;
  margin: 0 auto;
`

export const ReservationsHolder = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.common.white};
`