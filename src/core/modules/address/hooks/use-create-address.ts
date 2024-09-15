import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { createAddress } from '..'
import { CreateAddressRequest } from '../types/create-address'

const useCreateAddress = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleCreateAddress = useCallback(
    async (params: CreateAddressRequest) => {
      setLoading(true)
      try {
        const response = await createAddress(params)

        if (!response.data) {
          return
        }

        addToast({
          title: 'Success',
          description: 'Address Created',
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

  return { handleCreateAddress, loading }
}

export { useCreateAddress }
