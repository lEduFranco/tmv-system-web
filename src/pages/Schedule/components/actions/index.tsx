import { Appointment } from '@/core'
import { Button } from '@/ui-components'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { ModalEdit } from '../modal-edit'

interface ActionsProps {
  item: Appointment
}

const Actions: React.FC<ActionsProps> = () => {
  return (
    <div className="flex gap-1">
      <ModalEdit item={item} />
      <Button typeColor="error">
        <FiTrash2 />
      </Button>
    </div>
  )
}

export { Actions }
