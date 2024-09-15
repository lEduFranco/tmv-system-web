import { useUpdateAddress } from '@/core/modules/address/hooks/use-update-address'
import { UpdateAddressRequest } from '@/core/modules/address/types/update-address'
import { useUpdateUser } from '@/core/modules/user/hooks/use-update-user'
import { UpdateUserRequest } from '@/core/modules/user/types/update-users'

import { Button } from '@/ui-components'

import React from 'react'
import { useFormContext } from 'react-hook-form'

interface FooterProps {
  handleModalClose: () => void
}

const Footer: React.FC<FooterProps> = ({ handleModalClose }) => {
  const { handleSubmit, watch } = useFormContext()
  const { handleUpdateUser, loading } = useUpdateUser()
  const { handleUpdateAddress, loading: loadingAddress } = useUpdateAddress()

  const { id, addressId } = watch()

  const handleEdit = handleSubmit((data: UpdateUserRequest) => {
    const payloadUpdateUser = {
      id,
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      avatarUrl: data.avatarUrl,
      role: 'client',
    } as UpdateUserRequest

    const payloadUpdateAddress = {
      id: addressId,
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      country: data.country,
      userId: id,
    } as UpdateAddressRequest

    handleUpdateUser(payloadUpdateUser)
    handleUpdateAddress(payloadUpdateAddress)

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
          onClick={handleEdit}
          isLoading={loading || loadingAddress}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}

export { Footer }
