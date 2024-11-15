import styled from "styled-components";

export const BookConfirmHolder = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({theme}) => theme.colors.common.white};
`
export const UserInfoHolder = styled.form`
  display: flex;
  flex-flow: column;
  margin: 1rem;
`
export const SpecialNeedsHolder = styled.div`
  margin: 2rem 0rem;
`
export const ConsentHolder = styled.div`
  margin: 0.5rem 0rem;
`
export const InputStyled = styled.input`
  padding: 0.3rem;
  color: ${({theme}) => theme.colors.common.black};
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: ${({theme}) => theme.radiuses.medium}px;
`
export const SpecialLineHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`
export const CheckboxStyled = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({theme}) => theme.colors.primary.main};
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.common.white};
  cursor: pointer;
  position: relative;
  top:7px;
  margin-right: 0.5rem;

  &:checked {
    background-color: ${({theme}) => theme.colors.primary.main};
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 6px;
    height: 12px;
    border: solid ${({theme}) => theme.colors.common.white};
    border-width: 0 2px 2px 0;
  }

  &:hover {
    border-color: ${({theme}) => theme.colors.primary.main};
  }
`;