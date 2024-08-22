import { Divider } from '@/ui-components/Divider'
import React from 'react'

export const Example: React.FC = () => {
  return (
    <div>
      <div>
        <span>TESTE</span>
      </div>
      <Divider orientation="horizontal" size="md" />
      <div className="flex gap-2">
        <span>TESTE</span>
        <Divider orientation="vertical" margin="sm" />
        <span>TESTE</span>
        <Divider orientation="vertical" margin="sm" />
        <span>TESTE</span>
      </div>
    </div>
  )
}
