import { Appointment } from '@/core'
import { Button } from '@/ui-components'
import React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

interface ActionsProps {
  item: Appointment
}

const Actions: React.FC<ActionsProps> = ({ item }) => {
  return (
    <div className="flex gap-1">
      <Button typeColor="alert">
        <FiEdit2 />
      </Button>
      <Button typeColor="error">
        <FiTrash2 />
      </Button>
    </div>
  )
}

export { Actions }
