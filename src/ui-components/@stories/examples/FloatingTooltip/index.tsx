import React from 'react'
import { FiArrowDown, FiLayout, FiUser } from 'react-icons/fi'

import { FloatingTooltip } from '@/ui-components'

export const Example: React.FC = () => {
  return (
    <div className="flex items-center gap-14 justify-center">
      <FloatingTooltip content="Tooltip of Layout">
        <FiLayout size={32} />
      </FloatingTooltip>

      <FloatingTooltip content="Tooltip of User">
        <FiUser size={32} />
      </FloatingTooltip>

      <FloatingTooltip content="Tooltip of Arrow Down">
        <FiArrowDown size={32} />
      </FloatingTooltip>
    </div>
  )
}
