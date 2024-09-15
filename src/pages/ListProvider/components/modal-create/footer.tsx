import { useCreateUser } from '@/core/modules/user/hooks/use-create-user'
import { CreateUserRequest } from '@/core/modules/user/types/create-user'

import { Button } from '@/ui-components'

import React from 'react'
import { useFormContext } from 'react-hook-form'

interface FooterProps {
  handleModalClose: () => void
}

const Footer: React.FC<FooterProps> = ({ handleModalClose }) => {
  const { handleSubmit } = useFormContext()
  const { handleCreateUser, loading } = useCreateUser()

  const handleCreate = handleSubmit((data: CreateUserRequest) => {
    handleCreateUser({
      ...data,
      role: 'provider',
    })

    handleModalClose()
  })

  return (
    <div className="flex justify-end">
      <div className="flex gap-1">
        <Button typeColor="blank" size="sm" onClick={() => handleModalClose()}>
          Cancelar
        </Button>

        <Button
          size="sm"
          typeColor="success"
          onClick={handleCreate}
          isLoading={loading}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}

export { Footer }
