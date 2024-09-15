import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { updateAddress } from '../service/address-service'
import { UpdateAddressRequest } from '@/core/modules/address/types/update-address'

const useUpdateAddress = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleUpdateAddress = useCallback(
    async (params: UpdateAddressRequest) => {
      setLoading(true)
      try {
        await updateAddress(params)
        addToast({
          title: 'Success',
          description: 'User updated successfully',
          type: 'success',
        })
      } catch (error) {
        addToast({
          title: 'Error',
          description: error.message || 'Failed to update user',
          type: 'error',
        })
      } finally {
        setLoading(false)
      }
    },
    [addToast],
  )

  return { handleUpdateAddress, loading }
}

export { useUpdateAddress }
