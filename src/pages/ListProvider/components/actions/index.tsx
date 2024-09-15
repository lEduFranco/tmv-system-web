import { UserType } from '@/core'

import React from 'react'

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
    </div>
  )
}
