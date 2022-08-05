import React from 'react'
import {
  SidebarContainer,
  Icon,
  ColoseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu
} from './SidebarElement'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ColoseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="project" onClick={toggle}>Project</SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar