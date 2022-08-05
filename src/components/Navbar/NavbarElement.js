import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background-color: #fff;
  height: 80px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  fornt-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NvabarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
  color: #000;
  justify-content: flex-start;
  cursor: pointer;
  fornt-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    color: #000;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 960px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px; 
`

export const NavLinks = styled(LinkScroll)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
  
//   @media (max-width: 960px) {
//     display: none;
//   }
// `

// export const NavBtnLink = styled(LinkRouter)`
//   border-radius: 50px;
//   background-color: #01bf71;
//   white-space: nowrap;
//   padding: 10px 20px;
//   color: #010606;
//   font-size: 1.2rem;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background-color: #fff;
//     color: #010606;
//   }
// `