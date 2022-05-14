import styled, { css }from "styled-components";
import { Link } from "react-router-dom";
const Navbar = styled.nav`
  display: flex;
  justify-content: right;
  background-color: #fff;
  color: #black;
  padding: 1rem;
  transition: 0.5s;
  align-items: center;
  ${(props) =>
    props.dark &&
    css`
      background: black;
      color: #fff;
    `}
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  margin-right: 25px;
  @media (max-width: 768px) {
    display: none;
  }
  ${({ dark }) => dark && css`color : white;`}
`;

const ThemeButton = styled.button`
  background: white;
  color: black;
  border: solid black 1px;
  border-radius: 50%;
  transition: 1s;
  ${(props) =>
    props.dark &&
    css`
      color: #fff;
      border: solid white 1px;
    `}
`;

export {
    Navbar,
    NavLink,
    ThemeButton
}