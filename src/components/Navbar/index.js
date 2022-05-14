

import { Navbar, NavLink, ThemeButton } from "./index.styled"
import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";
import { ThemesContext } from "../../context/index";
import { useContext } from "react";
const navs = [{
  name: "Home",
  path : "/",
},
{
  name : "About",
  path: "/about"
},
{
  name : "Contact",
  path: "contact"
}
];
const NavComp =  ({ onClick }) => {
    const { darkValue } = useContext(ThemesContext)
    return (
    <Navbar dark={darkValue}>
        {navs.map((nav, i) => (
          <NavLink to={nav.path} dark={darkValue} key={i}> {nav.name}</NavLink>
        ))}
        <ThemeButton dark={darkValue} onClick={onClick}>
          <img
            src={darkValue ? Sun : Moon}
            alt="light-theme-icon"
            style={{ width: `${15}px`, height: `${20}px` }}
          />
        </ThemeButton>
      </Navbar>
    )
}

export default NavComp;