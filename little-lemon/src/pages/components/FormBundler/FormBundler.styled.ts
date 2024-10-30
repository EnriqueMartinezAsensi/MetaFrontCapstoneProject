import styled from "styled-components";

type FromBundlerWrapperProps = {
  vertical: boolean;
}

export const FromBundlerWrapper = styled.div<FromBundlerWrapperProps>`
  display: flex;
  flex-flow: ${({vertical}) => vertical ? "column" : "row"};
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 0.7rem auto;
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.common.black};
  border-radius: ${({theme}) => theme.radiuses.medium}px;
`