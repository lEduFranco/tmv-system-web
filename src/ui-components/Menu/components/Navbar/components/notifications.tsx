import React, { useCallback, useState } from 'react'
import { tv } from 'tailwind-variants'
import { FiBell } from 'react-icons/fi'

import { useToast } from '@/hooks/toast'
import { useGetNotifications } from '@/core/modules/notification/hooks/use-get-notifications'
import { read } from '@/core/modules/notification/service/notification-service'

import { NotificationItem } from '@ui-components/Menu/components/Navbar/components/notification-item'
import { ModalNotification } from '@ui-components/Menu/components/Navbar/components/ModalNotification'
import { Button, DropDown } from '@ui-components'

const notificationsArea = tv({
  base: 'flex flex-col gap-2 max-h-80 overflow-auto',
  variants: {
    many: {
      true: 'pr-2',
      false: '',
    },
  },
})

export const Notifications: React.FC = () => {
  const { notifications, handleGetNotifications } = useGetNotifications()
  const { addToast } = useToast()

  const [notificationsModalIsOpen, setNotificationsModalIsOpen] =
    useState(false)

  const handleReadNotification = useCallback(
    async (id: string) => {
      try {
        await read({ id, read: true })

        addToast({
          type: 'success',
          title: 'Notificação lida com sucesso',
        })

        handleGetNotifications()
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler notificação',
        })
      }
    },
    [addToast, handleGetNotifications],
  )

  return (
    <DropDown>
      <DropDown.Trigger>
        <div className="cursor-pointer relative">
          <div className="bg-primary text-text-tertiary w-5 h-5 p-2 rounded-full absolute flex flex-col items-center justify-center right-[-7px] top-[-7px]">
            <small className="text-xs">{notifications.length}</small>
          </div>
          <FiBell size={24} />
        </div>
      </DropDown.Trigger>
      <DropDown.Content align="end">
        <div className="flex flex-col gap-2 w-72 md:w-96">
          <section
            className={notificationsArea({ many: notifications.length > 4 })}
          >
            {notifications.map((notification) => {
              return (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onButtonClick={handleReadNotification}
                />
              )
            })}
          </section>
          <section className="w-full">
            <Button
              size="sm"
              typeColor="blank"
              onClick={() => setNotificationsModalIsOpen(true)}
            >
              Ver todas as notificações
            </Button>
          </section>
        </div>
      </DropDown.Content>

      <ModalNotification
        handleCloseNotificationModal={() => setNotificationsModalIsOpen(false)}
        handleUpdateNotificationForReadTrue={handleReadNotification}
        allNotifications={notifications}
        togleNotificationModal={notificationsModalIsOpen}
      />
    </DropDown>
  )
}
