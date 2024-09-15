import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { deleteAddress } from '../service/address-service'
import { DeleteAddressRequest } from '../types/delete-address.ts'

const useDeleteAddress = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleDeleteUser = useCallback(
    async (params: DeleteAddressRequest) => {
      setLoading(true)
      try {
        await deleteAddress(params)

        addToast({
          title: 'Success',
          description: 'Appointment Deleted',
          type: 'success',
        })
      } catch (error) {
        addToast({ title: 'Error', description: error.message, type: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [addToast],
  )

  return { handleDeleteUser, loading }
}

export { useDeleteAddress }
