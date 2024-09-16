import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { createUser } from '../service/user-service'
import { CreateUserRequest } from '../types/create-user'
import { useUsers } from '../providers/user'

const useCreateUser = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const {
    handlers: { handleGetUsersByRole },
  } = useUsers()

  const handleCreateUser = useCallback(
    async (params: CreateUserRequest) => {
      setLoading(true)
      try {
        const response = await createUser(params)

        if (!response.data) {
          return
        }
        handleGetUsersByRole(response.data.role)
        addToast({
          title: 'Success',
          description: 'User Created',
          type: 'success',
        })
      } catch (error) {
        addToast({ title: 'Error', description: error.message, type: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [addToast, handleGetUsersByRole],
  )

  return { handleCreateUser, loading }
}

export { useCreateUser }
