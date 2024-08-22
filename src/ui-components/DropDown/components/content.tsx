import React, { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface ContentProps {
  children: ReactNode
  align?: 'start' | 'end' | 'center'
}

export const Content: React.FC<ContentProps> = ({
  children,
  align = 'center',
}) => {
  return (
    <DropdownMenu.Content
      className="bg-background z-50 rounded-md p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
      sideOffset={4}
      align={align}
    >
      {children}
      <DropdownMenu.Arrow className="fill-background" />
    </DropdownMenu.Content>
  )
}
