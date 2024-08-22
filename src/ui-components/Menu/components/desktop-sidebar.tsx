import React, { useCallback, useState } from 'react'

import { tv } from 'tailwind-variants'
import { FiLayout } from 'react-icons/fi'

import horizontalLogo from '@/assets/logo/tmv-horizontal-logo.svg'
import logo from '@/assets/logo/tmv-logo.svg'

import { useAuth } from '@/core/hooks/use-auth'

import { SideBarItem } from '@ui-components/Menu/components/sidebar-item'

import { clientItems } from '@ui-components/Menu/utils/client-items'
import { geralItems } from '@ui-components/Menu/utils/geral-items'
import { othersItems } from '@ui-components/Menu/utils/others-items'
import { scheduleItems } from '@ui-components/Menu/utils/schedule-items'
import { providerItems } from '@ui-components/Menu/utils/provider-items'
import { FloatingTooltip } from '@ui-components/FloatingTooltip'

const asideStyle = tv({
  base: 'h-full bg-menu-bg shadow-lg p-4  flex-col gap-2 transition-all hidden sm:flex overflow-auto animate-slideLeftAndFade',
  variants: {
    open: {
      true: 'w-96',
      false: 'w-16 items-center',
    },
  },
})

const headerStyle = tv({
  base: 'w-full',
  variants: {
    open: {
      true: 'flex items-center justify-between',
      false: 'flex flex-col gap-2 items-center',
    },
  },
})

const sectionStyle = tv({
  base: 'pb-2 border-b-2 border-slate-200 flex flex-col gap-2',
})

export const DesktopSidebar: React.FC = () => {
  const { user } = useAuth()

  const [open, setOpen] = useState(true)

  const handleToggleMenu = useCallback(() => {
    setOpen((oldState) => !oldState)
  }, [])

  return (
    <aside className={asideStyle({ open })}>
      <div className={headerStyle({ open })}>
        {open ? (
          <img src={horizontalLogo} alt="" className="w-20" />
        ) : (
          <img src={logo} alt="" className="w-4" />
        )}
        <FloatingTooltip content={open ? 'Fechar' : 'Abrir'}>
          <FiLayout className="cursor-pointer" onClick={handleToggleMenu} />
        </FloatingTooltip>
      </div>

      <hr className="border-1 border-slate-200" />

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
          <span className="text-text-disabled font-bold">Agendamento</span>
        ) : null}
        {scheduleItems.map(({ icon, label, path, allowedRoles }) => {
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
        {providerItems.map(({ icon, label, path, allowedroles }) => {
          if (allowedroles.includes(user.role)) {
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
          <span className="text-text-disabled font-bold">Outros</span>
        ) : null}
        {othersItems.map(({ icon, label, path, allowedRoles }) => {
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
    </aside>
  )
}
