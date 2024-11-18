import styled from "styled-components";

type SelectableItemProps = {
  $active: boolean;
}

export const SelectFromListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2.2rem, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  `

export const SelectableItem = styled.div<SelectableItemProps>`
  color: ${({$active, theme}) => $active ? theme.colors.common.white : theme.colors.primary.main};
  background-color: ${({$active, theme}) => $active ? theme.colors.primary.main : theme.colors.common.grey};
  border: solid 3px ${({$active, theme}) => $active ? theme.colors.common.darkergreen : "transparent"};
  border-radius: ${({theme})=> theme.radiuses.medium}px;
  font-family: ${({theme}) => theme.text.card.fontFamily} ;
  font-size: ${({theme}) => theme.text.card.fontSize};
  justify-self: center;
  padding: 0 0.2rem;
`