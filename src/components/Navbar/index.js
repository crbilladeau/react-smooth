import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavLink, NavBtn, NavBtnLink } from './NavbarStyles';

const Navbar = ({toggleSidebar}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            bitcash
          </NavLogo>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <li>
              <NavLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Sign Up
              </NavLink>
            </li>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
