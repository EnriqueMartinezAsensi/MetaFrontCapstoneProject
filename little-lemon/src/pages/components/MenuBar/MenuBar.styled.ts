import styled from "styled-components";

export const StickyBar = styled.div`
  background-color: ${({theme}) => theme.colors.common.white};
  position: fixed;
  overflow: hidden;
  z-index: 99;
  width:100%;
  top: 0px;
`

export const MenuHolder = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  max-width: 1027px;
  min-width: 660px;
  margin: auto;
`
export const MenuList = styled.ul`
  display: flex;
  flex-flow: row;
  list-style-type: none;
  @media(max-width: ${({theme})=> theme.media.first}px) {
    display: none;
  }
`

export const MenuItem = styled.li`
  padding: 10px;
  font-weight: bolder;
`