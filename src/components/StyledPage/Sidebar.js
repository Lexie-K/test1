import React from 'react'
import styled from 'styled-components'

const SidebarStyle = styled.aside`
  // use rem
  min-width: 30rem;
  background-color: rgb(241, 245, 16);         
`

const Sidebar = () => (
  <SidebarStyle>
    Sidebar
  </SidebarStyle>
);

export default Sidebar;

