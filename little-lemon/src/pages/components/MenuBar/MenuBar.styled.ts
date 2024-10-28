import styled from "styled-components";

type MenuListProps = {
  active: boolean;
};

type VerticalMenuHolderProps = {
  active: boolean;
};

export const StickyBar = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  position: fixed;
  overflow: hidden;
  z-index: 99;
  width: 100%;
  height: 80px;
  top: 0px;
`;

export const MenuHolder = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  max-width: 1027px;
  min-width: 660px;
  height: 100%;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    min-width: 0;
    width: 100%;
  }
`;
export const MenuList = styled.ul<MenuListProps>`
  display: flex;
  flex-flow: row;
  list-style-type: none;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    display: ${({ active }) => {
      return active ? "none" : "flex-box";
    }};
    flex-flow: column;
  }
`;

export const MenuItem = styled.li`
  padding: 10px;
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  font-family: ${({ theme }) => theme.text.navigationBar.fontFamily};
  font-weight: ${({ theme }) => theme.text.navigationBar.fontWeight};
`;

export const MenuLogo = styled.img`
  height: 75%;
  margin: 0 0.5rem;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    display: block;
  }
`;

export const VerticalMenuHolder = styled.div<VerticalMenuHolderProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: -1;
  top: ${({ active }) => {
    return active ? "0px" : "-120vh";
  }};
`;
