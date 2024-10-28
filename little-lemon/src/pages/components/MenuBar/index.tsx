import { MenuList, MenuHolder, MenuItem, StickyBar, MenuLogo, BurgerMenu, VerticalMenuHolder } from "./MenuBar.styled";
import Logo from "./../../../assets/images/Logo.svg"
import BurgerIcon from "../../../assets/components/BurgerIcon";
import { useState } from "react";
import { RouteProvider } from "../../../types/routes";


const MenuBar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  return <StickyBar>
    <MenuHolder>
      <BurgerMenu onClick={() => setIsMenuActive(!isMenuActive)}>
        <BurgerIcon size="75" ></BurgerIcon>
      </BurgerMenu>
      <MenuLogo src={Logo} alt="Logo" />
      <MenuList active={isMenuActive}>
        {RouteProvider.map((route) => <MenuItem>{route.name}</MenuItem>)}
      </MenuList>
      <VerticalMenuHolder active={isMenuActive} />
    </MenuHolder>
  </StickyBar>
}

//Tienes que crear un componente debajo de la barra para que se displayee cuando clicas el botón. Se redimensiona, cambia en transparencia. 

export default MenuBar;