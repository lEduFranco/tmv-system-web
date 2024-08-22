import React, { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Trigger } from '@ui-components/DropDown/components/trigger'
import { Content } from '@ui-components/DropDown/components/content'

interface DropDownProps {
  children: ReactNode
}

interface DropDownComponent extends React.FC<DropDownProps> {
  Trigger: typeof Trigger
  Content: typeof Content
  Item: typeof DropdownMenu.Item
}

export const DropDown: DropDownComponent = ({ children }) => {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>
}

DropDown.Trigger = Trigger
DropDown.Content = Content
DropDown.Item = DropdownMenu.Item
