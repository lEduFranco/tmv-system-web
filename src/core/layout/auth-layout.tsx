import React from 'react'

import { Outlet } from 'react-router-dom'

import { MenuWrapper } from '@/ui-components'

export const AuthLayout: React.FC = () => {
  return (
    <MenuWrapper>
      <Outlet />
    </MenuWrapper>
  )
}
