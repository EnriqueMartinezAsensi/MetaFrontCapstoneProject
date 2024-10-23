import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  >*{
    color: ${({theme}) => theme.colors.common.white};
    *:visited{
      color: ${({theme}) => theme.colors.common.white};
    }
    *:link {
      color: ${({theme}) => theme.colors.common.white};
    }
  }
`
export const FooterItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px;
  @media(max-width: ${({theme})=> theme.media.first}px) {
    width: 40%;
    flex-grow: 1;
    margin: 1rem;
    align-items: center;
  }
`

export const FooterMenu = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  @media(max-width: ${({theme})=> theme.media.first}px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
export const FooterTitle = styled.h1`
  margin: 0;
  padding: 0;
`

export const FooterBertical = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;
  list-style-type: none;
`

export const FooterLogo = styled.img`
  margin: 1rem 0;
`