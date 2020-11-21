import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarStyles';

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <>
     <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
       <Icon onClick={toggleSidebar}>
         <CloseIcon />
       </Icon>
       <SidebarWrapper>
         <SidebarMenu>
           <SidebarLink to="about" onClick={toggleSidebar}>
             About
           </SidebarLink>
           <SidebarLink to="discover" onClick={toggleSidebar}>
             Discover
           </SidebarLink>
           <SidebarLink to="services" onClick={toggleSidebar}>
             Services
           </SidebarLink>
           <SidebarLink to="signup" onClick={toggleSidebar}>
             Sign Up
           </SidebarLink>
         </SidebarMenu>
         <SideBtnWrap>
           <SidebarRoute to="/signin" onClick={toggleSidebar}>
             Sign In
           </SidebarRoute>
         </SideBtnWrap>
       </SidebarWrapper>
     </SidebarContainer> 
    </>
  )
}

export default Sidebar;
