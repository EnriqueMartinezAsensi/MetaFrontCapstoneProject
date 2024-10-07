import styled from "styled-components";

export const ScrollerWrapper = styled.section`
  display: flex;
  position: relative;
  height: 500px;
  justify-content: space-between;
`

export const ScrollerTextWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  >h1, h2, p{
    color: ${({theme}) => theme.colors.common.white};
  }
`

export const ScrollerImageWrapper = styled.div`
  position: absolute;
  right: 0;
  overflow: clip;
`
export const Image = styled.img`
  width: 400px;
  max-height: 600px;
  z-index: 90;
  border-radius: ${({theme})=> theme.radiuses.medium}px;
`