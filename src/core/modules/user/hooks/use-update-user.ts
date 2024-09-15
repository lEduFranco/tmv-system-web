import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { updateUser } from '../service/user-service'
import { UpdateUserRequest } from '../types/update-users'

const useUpdateUser = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleUpdateUser = useCallback(
    async (params: UpdateUserRequest) => {
      setLoading(true)
      try {
        await updateUser(params)
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

  return { handleUpdateUser, loading }
}

export { useUpdateUser }
