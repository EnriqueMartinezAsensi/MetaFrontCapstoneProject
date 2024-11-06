import styled from "styled-components";
import Button from "../components/Button";

type FromSeparatorProps = {
  active: boolean;
}

export const FormLabel = styled.label`
  color: ${({theme}) => theme.colors.common.black};
  font-family: ${({theme}) => theme.text.card.fontFamily} ;
  font-size: ${({theme}) => theme.text.card.fontSize};
`;
export const CalendarHolder = styled.div`
  width: 96%;
  margin: 0 auto;
`;

export const ReservationsHolder = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({theme}) => theme.colors.common.white};
`;

export const ReserveButton = styled(Button)`
  width: 90%;
`;

export const FromSeparator = styled.div<FromSeparatorProps>`
  display: ${({active}) => active ? "block":"none"};
  padding: 0;
  margin: 0;
`