import { Moon, SidebarIcon, Sun } from '@/Assets/Icons'

import React from 'react'

function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarIcon />
      <div className="sidebar__bottom-group">
        <Moon />
        <div className="sidebar__divider" />
        <div className="sidebar__profile-picture"></div>
      </div>
    </aside>
  )
}

export default Sidebar
