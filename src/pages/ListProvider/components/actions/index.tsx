import { UserType } from '@/core'
import { Button } from '@/ui-components'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

import { ModalEdit } from '../modal-edit'
import { useDeleteUser } from '@/core/modules/user/hooks/use-delete-user'

interface ActionsProps {
  item: UserType
  handleGetUsersByRole: (role: string) => void
}

export const Actions: React.FC<ActionsProps> = ({
  item,
  handleGetUsersByRole,
}) => {
  const { handleDeleteUser } = useDeleteUser()
  return (
    <div className="flex gap-1">
      <ModalEdit item={item} handleGetUsersByRole={handleGetUsersByRole} />

      <Button
        typeColor="error"
        onClick={() =>
          handleDeleteUser({
            id: item.id,
          })
        }
      >
        <FiTrash2 />
      </Button>
    </div>
  )
}
