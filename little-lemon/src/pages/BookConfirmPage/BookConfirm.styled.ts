import styled from "styled-components";

type UserInfoHolderProps = {
  $active: boolean
}

export const BookConfirmHolder = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({theme}) => theme.colors.common.white};
`
export const UserInfoHolder = styled.form<UserInfoHolderProps>`
  display: ${({$active}) => $active ? "none" : "flex"};
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

export const FormButton = styled.input`
  margin: 0.7rem;
  border-radius: ${({theme}) => theme.radiuses.medium}px;
  width: 90%;
  min-width: fit-content;
  height: 2.5rem;
  font-family: ${({theme}) => theme.text.card.fontFamily} ;
  font-size: ${({theme}) => theme.text.card.fontSize};
  font-weight: 800;
  color: ${({theme}) => theme.colors.button.normal.text};
  border-color: transparent;
  background-color: ${({theme}) => theme.colors.button.normal.background};
  transition: all ${({theme}) => theme.transitions.normal}s;
  &:hover:enabled{
    color: ${({theme}) => theme.colors.button.normal.background};
    background-color: ${({theme}) => theme.colors.button.click.background};
    border: 2px solid ${({theme}) => theme.colors.button.normal.background};
  }
  &:disabled{
    background-color: ${({theme}) => theme.colors.button.disabled.background};
  }
`
export const DataDisplayer = styled.label`
  margin: 1rem 0;
  text-wrap: balance;
  text-align: center;
  font-family: ${({theme}) => theme.text.subtitle.fontFamily};
  font-size: larger;
  line-height: normal;
`
export const ReserveConfirmHolder = styled.div<UserInfoHolderProps>`
  display: ${({$active}) => $active ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`