import { MenuList, MenuHolder, MenuItem, StickyBar } from "./MenuBar.styled";
import Logo from "./../../../assets/images/Logo.svg"



const MenuBar = () => {
  return <StickyBar>
    <MenuHolder>
      <img src={Logo} alt="Logo" />
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About us</MenuItem>
        <MenuItem>Order online</MenuItem>
        <MenuItem>Reserve a table</MenuItem>
        <MenuItem>Menu</MenuItem>
        <MenuItem>Potato</MenuItem>
      </MenuList>
    </MenuHolder>
  </StickyBar>
}

export default MenuBar;