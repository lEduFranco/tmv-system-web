import React, { useMemo } from 'react'

import { NavLink } from 'react-router-dom'
import { tv } from 'tailwind-variants'
import { IconType } from 'react-icons/lib'

import { FloatingTooltip } from '@ui-components/FloatingTooltip'

const itemStyle = tv({
  base: 'flex items-center gap-2 px-1 py-1  transition-all rounded',
  variants: {
    active: {
      true: 'bg-primary text-text-tertiary',
      false: 'hover:bg-menu-foreground',
    },
    open: {
      true: 'px-2',
      false: 'p-2',
    },
  },
})

interface SideBarItemProps {
  path: string
  icon: IconType
  label: string
  open: boolean
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  path,
  icon: Icon,
  label,
  open,
}) => {
  const Content = useMemo(() => {
    return {
      true: (
        <NavLink
          to={path}
          className={({ isActive }) => itemStyle({ active: isActive, open })}
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ),
      false: (
        <FloatingTooltip content={label}>
          <NavLink
            to={path}
            className={({ isActive }) => itemStyle({ active: isActive, open })}
          >
            <Icon />
          </NavLink>
        </FloatingTooltip>
      ),
    }
  }, [Icon, label, open, path])

  return Content[open ? 'true' : 'false']
}
