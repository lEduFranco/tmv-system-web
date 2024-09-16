import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from 'react'

import { getUsersByRole } from '../service/user-service'
import { GetUsersResponse, Role } from '../types/get-users-by-role'

type UserContextSchema = {
  handlers: {
    handleGetUsersByRole: (role: Role) => Promise<void>
  }

  users: GetUsersResponse
  loading: boolean
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextSchema)

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
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

  return (
    <UserContext.Provider
      value={{
        handlers: { handleGetUsersByRole },
        users,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUsers must be used within a UserProvider')
  }

  return context
}
