import styled from "styled-components";

type ScrollerProps = {
  dark: boolean,
}

export const ScrollerWrapper = styled.section`
  display: flex;
  position: relative;
  height: 500px;
  justify-content: space-between;
  @media(max-width: ${({theme})=> theme.media.first}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
export const ScrollerTextWrapper = styled.div<ScrollerProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  >p, h2{
    color: ${({dark, theme}) => {
      if(dark) return theme.colors.common.white;
      return theme.colors.common.black;
    }};
  }
  @media(max-width: ${({theme})=> theme.media.first}px) {
    width: 80%;
    margin: 1rem 0 0 0;
  }
`

export const ScrollerImageWrapper = styled.div`
  position: absolute;
  right: 0;
  overflow: clip;
  @media(max-width: ${({theme})=> theme.media.first}px) {
    position: inherit;
    margin: 0 0 1rem 0;
  }
`
export const Image = styled.img`
  width: 400px;
  max-height: 500px;
  margin: 50px 0px 0px 0px;
  z-index: 90;
  border-radius: ${({theme})=> theme.radiuses.medium}px;
`

export const HeadTitle = styled.h1`
  margin: 0rem 0rem ;
  font-family: ${({theme}) => theme.text.title.fontFamily};
  font-size: ${({theme}) => theme.text.title.fontSize};
  color: ${({theme}) => theme.colors.button.normal.background};
`

export const HeadSubtitle = styled.h2`
  margin: 0;
  font-family: ${({theme}) => theme.text.subtitle.fontFamily};
  font-size: ${({theme}) => theme.text.subtitle.fontSize};
`
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
  padding: 0;
`