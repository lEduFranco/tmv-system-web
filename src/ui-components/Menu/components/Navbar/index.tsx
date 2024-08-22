import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu, FiPlus } from 'react-icons/fi'

import { UserOptions } from '@ui-components/Menu/components/Navbar/components/user-options'
import { MobileSidebar } from '@ui-components/Menu/components/mobile-sidebar'

import { Button } from '@ui-components/Button'
import { useAuth } from '@/core/hooks/use-auth'

export const NavBar: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

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

      <div className="flex items-center gap-6">
        {['admin', 'staff'].includes(user.role) ? (
          <div className="hidden sm:flex">
            <Button
              size="sm"
              block={false}
              onClick={() => navigate('/create-appointments')}
            >
              <FiPlus />
              Novo Agendamento
            </Button>
          </div>
        ) : null}

        <UserOptions />
      </div>
    </div>
  )
}
