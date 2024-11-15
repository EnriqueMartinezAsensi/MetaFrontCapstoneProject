import { MenuList, MenuHolder, MenuItem, StickyBar, MenuLogo, BurgerMenu, VerticalMenuHolder, MemuListVertical, MenuLink, BackButton } from "./MenuBar.styled";
import Logo from "./../../../assets/images/Logo.svg"
import BurgerIcon from "../../../assets/components/BurgerIcon";
import { useState } from "react";
import { RouteProvider } from "../../../types/routes";
import BackIcon from "../../../assets/components/BackIcon";


const MenuBar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  return <StickyBar>
    <MenuHolder>
      <BurgerMenu onClick={() => setIsMenuActive(!isMenuActive)}>
        <BurgerIcon size="60" active={isMenuActive} ></BurgerIcon>
      </BurgerMenu>
      <MenuLogo src={Logo} alt="Logo" />
      <BackButton>
        <BackIcon />
      </BackButton>
      <MenuList>
        {RouteProvider.map((route) => <MenuItem><MenuLink to={route.route}>{route.name}</MenuLink></MenuItem>)}
      </MenuList>
      <VerticalMenuHolder active={isMenuActive}>
        <MemuListVertical active={isMenuActive}>
          {RouteProvider.map((route) => <MenuItem><MenuLink to={route.route}>{route.name}</MenuLink></MenuItem>)}
        </MemuListVertical>
      </VerticalMenuHolder>
    </MenuHolder>
  </StickyBar>
}

export default MenuBar;