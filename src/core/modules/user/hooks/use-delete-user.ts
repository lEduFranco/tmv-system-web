import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { deleteUser } from '../service/user-service'
import { DeleteUserRequest } from '../types/delete-user.ts'

const useDeleteUser = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleDeleteUser = useCallback(
    async (params: DeleteUserRequest) => {
      setLoading(true)
      try {
        await deleteUser(params)

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

export { useDeleteUser }
