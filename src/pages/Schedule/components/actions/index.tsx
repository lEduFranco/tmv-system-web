import { Appointment } from '@/core'
import { Button } from '@/ui-components'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { ModalEdit } from '../modal-edit'
import { useDeleteAppointments } from '@/core/modules/appointment/hooks/use-delete-appointments'
import { format, parseISO } from 'date-fns'
import { useAppointments } from '@/core/modules/appointment/providers/appointments'

interface ActionsProps {
  item: Appointment
}

const Actions: React.FC<ActionsProps> = ({ item }) => {
  const { handleDeleteAppointments } = useDeleteAppointments()
  const {
    handlers: { getAppointments },
  } = useAppointments()

  return (
    <div className="flex gap-1">
      <ModalEdit item={item} />
      <Button
        typeColor="error"
        onClick={() => {
          handleDeleteAppointments({
            id: item.id,
          }).then(() => {
            getAppointments(format(parseISO(item.date), 'yyyy-MM-dd'))
          })
        }}
      >
        <FiTrash2 />
      </Button>
    </div>
  )
}

export { Actions }
