import React from 'react'
import { FiChevronDown, FiLogOut } from 'react-icons/fi'

import { useAuth } from '@/core/hooks/use-auth'

import avatarPleceHolder from '@/assets/place-holder/avatar.jpg'

import { DropDown } from '@ui-components/DropDown'

export const UserOptions: React.FC = () => {
  const {
    user,
    handlers: { handleSignOut },
  } = useAuth()

  return (
    <div className="cursor-pointer relative">
      <img
        src={avatarPleceHolder}
        alt="avatar"
        className="w-8 h-8 rounded-full"
      />
      <DropDown>
        <DropDown.Trigger>
          <div className="bg-menu-bg rounded-full w-4 h-4 flex items-center justify-center absolute right-0 bottom-0 hover:bg-primary-foreground hover:text-background transition-all">
            <FiChevronDown size={14} />
          </div>
        </DropDown.Trigger>
        <DropDown.Content align="end">
          <div className="flex flex-col gap-4">
            <section className="pb-2 border-b-[1px] border-disabled">
              <div className="flex gap-2">
                <img
                  src={avatarPleceHolder}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <span>{user.email}</span>
                  <small>{user.role}</small>
                </div>
              </div>
            </section>
            <section>
              <DropDown.Item
                onClick={handleSignOut}
                className="flex items-center gap-2 p-2"
              >
                <FiLogOut />
                <span>Sair</span>
              </DropDown.Item>
            </section>
          </div>
        </DropDown.Content>
      </DropDown>
    </div>
  )
}
