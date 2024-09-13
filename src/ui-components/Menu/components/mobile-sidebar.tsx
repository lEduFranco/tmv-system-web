import React from 'react'
import { tv } from 'tailwind-variants'
import { FiLayout } from 'react-icons/fi'

import { useAuth } from '@/core/hooks/use-auth'

import horizontalLogo from '@/assets/logo/tmv-horizontal-logo.svg'

import { geralItems } from '@ui-components/Menu/utils/geral-items'
import { clientItems } from '@ui-components/Menu/utils/client-items'
import { providerItems } from '@ui-components/Menu/utils/provider-items'
import { SideBarItem } from '@ui-components/Menu/components/sidebar-item'

const mobileSidebar = tv({
  base: 'h-screen w-4/5 bg-menu-bg',
  variants: {
    open: {
      true: 'flex flex-col gap-4 absolute left-0 shadow-2xl top-0 p-8 z-50 animate-slideLeftAndFade overflow-auto',
      false: 'hidden',
    },
  },
})

const sectionStyle = tv({
  base: 'pb-2 border-b-2 border-slate-200 flex flex-col gap-2',
})

interface MobileSidebarProps {
  open: boolean
  closeSidebar: () => void
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  open,
  closeSidebar,
}) => {
  const { user } = useAuth()

  return (
    <div className={mobileSidebar({ open })}>
      <section className="flex items-center justify-between">
        <img src={horizontalLogo} alt="" className="w-2/4" />
        <FiLayout size={24} onClick={closeSidebar} />
      </section>
      <div>
        <section className={sectionStyle()}>
          {open ? (
            <span className="text-text-disabled font-bold">Geral</span>
          ) : null}
          {geralItems.map(({ path, icon, label, allowedRoles }) => {
            if (allowedRoles.includes(user.role)) {
              return (
                <SideBarItem
                  key={path}
                  icon={icon}
                  label={label}
                  path={path}
                  open={open}
                />
              )
            }

            return null
          })}
        </section>

        <section className={sectionStyle()}>
          {open ? (
            <span className="text-text-disabled font-bold">Cliente</span>
          ) : null}
          {clientItems.map(({ icon, label, path, allowedRoles }) => {
            if (allowedRoles.includes(user.role)) {
              return (
                <SideBarItem
                  key={path}
                  icon={icon}
                  label={label}
                  path={path}
                  open={open}
                />
              )
            }
            return null
          })}
        </section>

        <section className={sectionStyle()}>
          {open ? (
            <span className="text-text-disabled font-bold">Prestadora</span>
          ) : null}
          {providerItems.map(({ icon, label, path }) => {
            if (user.role === 'admin') {
              return (
                <SideBarItem
                  key={path}
                  icon={icon}
                  label={label}
                  path={path}
                  open={open}
                />
              )
            }

            return null
          })}
        </section>
      </div>
    </div>
  )
}
