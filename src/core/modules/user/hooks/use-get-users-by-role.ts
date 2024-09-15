import { useState, useEffect, useCallback } from 'react'

import { getUsersByRole } from '../service/user-service'
import { GetUsersResponse, Role } from '../types/get-users-by-role'

const useGetUsersByRole = (role: Role) => {
  const [users, setUsers] = useState<GetUsersResponse>([])
  const [loading, setLoading] = useState(false)

  const handleGetUsersByRole = useCallback(async (role: Role) => {
    setLoading(true)
    try {
      const { data } = await getUsersByRole({ role })

      setUsers(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleGetUsersByRole(role)
  }, [handleGetUsersByRole, role])

  return { users, loading, handleGetUsersByRole }
}

export { useGetUsersByRole }
