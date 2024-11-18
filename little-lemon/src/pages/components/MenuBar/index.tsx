import { MenuList, MenuHolder, MenuItem, StickyBar, MenuLogo, BurgerMenu, VerticalMenuHolder, MemuListVertical, MenuLink, BackButton } from "./MenuBar.styled";
import Logo from "./../../../assets/images/Logo.svg"
import BurgerIcon from "../../../assets/components/BurgerIcon";
import { useState } from "react";
import { RouteProvider } from "../../../types/routes";
import BackIcon from "../../../assets/components/BackIcon";
import { useNavigate } from "react-router-dom";


const MenuBar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const navigate = useNavigate();

  return <StickyBar>
    <MenuHolder>
      <BurgerMenu onClick={() => setIsMenuActive(!isMenuActive)}>
        <BurgerIcon size="60" active={isMenuActive} ></BurgerIcon>
      </BurgerMenu>
      <MenuLogo src={Logo} alt="Logo" />
      <BackButton onClick={() => navigate(-1)}>
        <BackIcon />
      </BackButton>
      <MenuList>
        {RouteProvider.map((route) => <MenuItem key={route.name}><MenuLink to={route.route}>{route.name}</MenuLink></MenuItem>)}
      </MenuList>
      <VerticalMenuHolder $active={isMenuActive}>
        <MemuListVertical $active={isMenuActive}>
          {RouteProvider.map((route) => <MenuItem key={route.name}><MenuLink to={route.route}>{route.name}</MenuLink></MenuItem>)}
        </MemuListVertical>
      </VerticalMenuHolder>
    </MenuHolder>
  </StickyBar>
}

export default MenuBar;