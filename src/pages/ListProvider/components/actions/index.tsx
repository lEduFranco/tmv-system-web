import { UserType } from '@/core'
import { Button, Form, Modal } from '@/ui-components'
import React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { FormProvider, useForm } from 'react-hook-form'
import { ModalEdit } from '../modal-edit'

interface ActionsProps {
  item: UserType
}

export const Actions: React.FC<ActionsProps> = ({ item }) => {
  const methods = useForm()

  return (
    <div className="flex gap-1">
      <FormProvider {...methods}>
        <ModalEdit item={item} />
      </FormProvider>
      <Button typeColor="error">
        <FiTrash2 />
      </Button>
    </div>
  )
}
