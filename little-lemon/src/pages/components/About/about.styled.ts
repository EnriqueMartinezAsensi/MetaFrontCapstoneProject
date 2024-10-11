import styled from "styled-components";

type AboutProps = {
  dark: boolean,
}

export const AboutWrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
`
export const AboutTextWrapper = styled.div<AboutProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  margin: 0 0 1rem 0;
  >p, h2{
    color: ${({dark, theme}) => {
      if(dark) return theme.colors.common.white;
      return theme.colors.common.black;
    }};
    text-align: justify;
  }
`
export const AboutImageWrapper = styled.div`
  width: 50%;
  position: relative;
`
export const AboutImage1 = styled.img`
  margin: 2rem 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 60%;
  z-index: 90;
  border-radius: ${({theme})=> theme.radiuses.medium}px;
  object-fit: cover;
  object-position: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const AboutImage2 = styled.img`
  margin: 2rem 0;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 60%;
  height: 60%;
  z-index: 80;
  border-radius: ${({theme})=> theme.radiuses.medium}px;
  object-fit: cover;
  object-position: 65%;
`

export const AboutHeadTitle = styled.h1`
  margin: 0rem 0rem ;
  font-family: ${({theme}) => theme.text.title.fontFamily};
  font-size: ${({theme}) => theme.text.title.fontSize};
  color: ${({theme}) => theme.colors.button.normal.background};
`

export const AboutHeadSubtitle = styled.h2`
  margin: 0;
  font-family: ${({theme}) => theme.text.subtitle.fontFamily};
  font-size: ${({theme}) => theme.text.subtitle.fontSize};
`