import React from 'react'
import { FiBell } from 'react-icons/fi'

import { NotificationWithAction, NotificationsArea, ReadButton } from './styles'

import { Modal } from '@/newComponents'

interface NotificationSchema {
  id: string
  recipient_id: string
  type: 'info' | 'success' | 'alert' | 'error'
  title: string
  read: boolean
  description: string
}

interface ModalNotificationProps {
  togleNotificationModal: boolean
  handleCloseNotificationModal: () => void
  handleUpdateNotificationForReadTrue: (id: string) => void
  allNotifications: NotificationSchema[]
}

const ModalNotification: React.FC<ModalNotificationProps> = ({
  handleCloseNotificationModal,
  handleUpdateNotificationForReadTrue,
  togleNotificationModal,
  allNotifications,
}) => {
  return (
    <Modal
      title="Notificações"
      isOpen={togleNotificationModal}
      onRequestClose={handleCloseNotificationModal}
      cancelMessage="Fechar Janela"
    >
      <NotificationsArea>
        {allNotifications?.map((notification) => {
          return (
            <NotificationWithAction key={notification.id}>
              <div>
                <FiBell />
                <span>{notification.description}</span>
              </div>
              <ReadButton
                disabled={notification.read}
                onClick={() =>
                  handleUpdateNotificationForReadTrue(notification.id)
                }
              >
                Marcar como lida
              </ReadButton>
            </NotificationWithAction>
          )
        })}
      </NotificationsArea>
    </Modal>
  )
}

export { ModalNotification }
