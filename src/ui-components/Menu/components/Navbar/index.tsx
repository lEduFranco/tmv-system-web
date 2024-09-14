import React, { useState } from 'react'

import { FiMenu } from 'react-icons/fi'

import { MobileSidebar } from '@ui-components/Menu/components/mobile-sidebar'

export const NavBar: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <div className="w-full bg-background border-b-2 border-disabled py-2 px-2 md:px-8 flex items-center justify-between sm:justify-end">
      <FiMenu
        className="flex sm:hidden"
        size={20}
        onClick={() => setIsMobileSidebarOpen(true)}
      />

      <MobileSidebar
        open={isMobileSidebarOpen}
        closeSidebar={() => setIsMobileSidebarOpen(false)}
      />
    </div>
  )
}
