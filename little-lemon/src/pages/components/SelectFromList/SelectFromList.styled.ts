import styled from "styled-components";

type SelectableItemProps = {
  active: boolean;
}

export const SelectFromListWrapper = styled.div`
 display: flex;
 gap: 1rem;
`

export const SelectableItem = styled.div<SelectableItemProps>`
  background-color: ${({active}) => active ? "red" : "white"};
`