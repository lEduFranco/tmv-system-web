import { UserType } from '@/core'

import React from 'react'

import { ModalEdit } from '../modal-edit'

interface ActionsProps {
  item: UserType
}

export const Actions: React.FC<ActionsProps> = ({ item }) => {
  return (
    <div className="flex gap-1">
      <ModalEdit item={item} />
    </div>
  )
}
