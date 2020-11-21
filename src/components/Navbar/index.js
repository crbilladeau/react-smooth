import React from 'react';
import {FaBars} from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavLink, NavBtn, NavBtnLink } from './NavbarStyles';

const Navbar = ({toggleSidebar}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            dolla
          </NavLogo>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <li>
              <NavLink to="about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="discover">
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink to="services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="signup">
                Sign Up
              </NavLink>
            </li>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
