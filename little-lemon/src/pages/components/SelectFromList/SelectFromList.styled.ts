import styled from "styled-components";

type SelectableItemProps = {
  active: boolean;
}

export const SelectFromListWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 1rem;
 padding: 0.5rem;
`

export const SelectableItem = styled.div<SelectableItemProps>`
  color: ${({active, theme}) => active ? theme.colors.common.white : theme.colors.primary.main};
  background-color: ${({active, theme}) => active ? theme.colors.primary.main : theme.colors.common.grey};
  border: solid 3px ${({active, theme}) => active ? theme.colors.common.darkergreen : "transparent"};
  border-radius: ${({theme})=> theme.radiuses.medium}px;
`