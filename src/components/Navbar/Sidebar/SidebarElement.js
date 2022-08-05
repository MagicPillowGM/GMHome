import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : 0)};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const ColoseIcon = styled(FaTimes)`
  color: #000;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;

  @media (max-width: 960px) {
    grid-template-row: repeat(6, 80px);
  }
`

export const SidebarLink = styled(LinkScroll)`
  dsiplay: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`


