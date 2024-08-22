import React from 'react'
import { tv } from 'tailwind-variants'
import { FiCheckCircle } from 'react-icons/fi'

import { Notification } from '@notification'

import { Button } from '@ui-components'

interface NotificationItemProps {
  notification: Notification
  onButtonClick?: (id: string) => void
}

const notificationStyled = tv({
  base: 'p-2 rounded flex justify-between gap-2 items-center bg-menu-bg border-2',
  variants: {
    type: {
      info: 'border-primary text-primary',
      success: 'border-success text-success',
      error: 'border-error text-error',
      alert: 'border-alert text-alert',
    },
  },
})

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification: { title, description, type, id },
  onButtonClick,
}) => {
  return (
    <div className={notificationStyled({ type })}>
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <small>{description}</small>
      </div>
      <Button
        size="sm"
        block={false}
        typeColor="blank"
        onClick={() => onButtonClick(id)}
      >
        <FiCheckCircle size={16} className="cursor-pointer" />
      </Button>
    </div>
  )
}
