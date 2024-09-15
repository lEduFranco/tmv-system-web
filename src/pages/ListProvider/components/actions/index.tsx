import { UserType } from '@/core'
import { Button } from '@/ui-components'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

import { ModalEdit } from '../modal-edit'

interface ActionsProps {
  item: UserType
  handleGetUsersByRole: (role: string) => void
}

export const Actions: React.FC<ActionsProps> = ({
  item,
  handleGetUsersByRole,
}) => {
  return (
    <div className="flex gap-1">
      <ModalEdit item={item} handleGetUsersByRole={handleGetUsersByRole} />

      <Button typeColor="error">
        <FiTrash2 />
      </Button>
    </div>
  )
}
