import React from 'react'

import { DesktopSidebar } from '@ui-components/Menu/components/desktop-sidebar'
import { NavBar } from '@ui-components/Menu/components/Navbar'

interface MenuWrapperProps {
  children: React.ReactNode
}

export const MenuWrapper: React.FC<MenuWrapperProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex">
      <DesktopSidebar />
      <div className="flex flex-col w-full h-full overflow-auto">
        <NavBar />
        <main className="flex-grow w-full overflow-auto">{children}</main>
      </div>
    </div>
  )
}
