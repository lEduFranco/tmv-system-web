import React from 'react'

import { ModalEdit } from '../modal-edit'

import { UserType } from '@/core'

interface ActionsProps {
  handleGetUsersByRole: (role: string) => void
  item: UserType
}

const Actions: React.FC<ActionsProps> = ({ item, handleGetUsersByRole }) => {
  return (
    <div className="flex gap-1">
      <ModalEdit handleGetUsersByRole={handleGetUsersByRole} item={item} />
    </div>
  )
}

export { Actions }
