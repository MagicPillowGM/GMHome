import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NvabarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  // NavBtn,
  // NavBtnLink
} from './NavbarElement'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NvabarContainer>
          <NavLogo to='/'>
            <h1>GM</h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='project'>Project</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='experience'>Experience</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </NvabarContainer>
      </Nav>
    </>
  )
}

export default Navbar