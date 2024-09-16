import React from 'react'

import { ModalEdit } from '../modal-edit'

import { UserType } from '@/core'

interface ActionsProps {
  item: UserType
}

const Actions: React.FC<ActionsProps> = ({ item }) => {
  return (
    <div className="flex gap-1">
      <ModalEdit item={item} />
    </div>
  )
}

export { Actions }
