import React, { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface TriggerProps {
  children: ReactNode
}

export const Trigger: React.FC<TriggerProps> = ({ children }) => {
  return <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
}
