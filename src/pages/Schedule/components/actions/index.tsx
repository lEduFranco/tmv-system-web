import { Appointment } from '@/core'
import { Button } from '@/ui-components'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { ModalEdit } from '../modal-edit'
import { useDeleteAppointments } from '@/core/modules/appointment/hooks/use-delete-appointments'
import { format, parseISO } from 'date-fns'

interface ActionsProps {
  item: Appointment
  getAppointments: (date: string) => void
}

const Actions: React.FC<ActionsProps> = ({ item, getAppointments }) => {
  const { handleDeleteAppointments } = useDeleteAppointments()
  return (
    <div className="flex gap-1">
      <ModalEdit item={item} getAppointments={getAppointments} />
      <Button
        typeColor="error"
        onClick={() => {
          getAppointments(format(parseISO(item.date), 'yyyy-MM-dd'))
          handleDeleteAppointments({
            id: item.id,
          })
        }}
      >
        <FiTrash2 />
      </Button>
    </div>
  )
}

export { Actions }
