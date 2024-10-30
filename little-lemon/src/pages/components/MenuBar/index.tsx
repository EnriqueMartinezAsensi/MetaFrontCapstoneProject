import { MenuList, MenuHolder, MenuItem, StickyBar, MenuLogo, BurgerMenu, VerticalMenuHolder, MemuListVertical, MenuLink } from "./MenuBar.styled";
import Logo from "./../../../assets/images/Logo.svg"
import BurgerIcon from "../../../assets/components/BurgerIcon";
import { useState } from "react";
import { RouteProvider } from "../../../types/routes";


const MenuBar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  return <StickyBar>
    <MenuHolder>
      <BurgerMenu onClick={() => setIsMenuActive(!isMenuActive)}>
        <BurgerIcon size="75" active={isMenuActive} ></BurgerIcon>
      </BurgerMenu>
      <MenuLogo src={Logo} alt="Logo" />
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