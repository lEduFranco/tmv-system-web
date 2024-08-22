import React from 'react'

import { Button, DropDown } from '@/ui-components'

export const Example: React.FC = () => {
  return (
    <div className="w-full h-4/5 flex items-center justify-center relative">
      <DropDown>
        <DropDown.Trigger>
          <Button size="sm" block={false}>
            Abrir DropDown
          </Button>
        </DropDown.Trigger>
        <DropDown.Content align="end">
          <div className="flex flex-col gap-2">
            <span>Item 1</span>
          </div>
        </DropDown.Content>
      </DropDown>
    </div>
  )
}
