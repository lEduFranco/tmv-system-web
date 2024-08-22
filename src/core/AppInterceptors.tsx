import React, { useEffect } from 'react'
import { useAuth } from '@/core/hooks/use-auth'
import { useToast } from '@/ui-components'
import { api } from './services/api'
import axios, { AxiosError } from 'axios'

interface Props {
  children: React.ReactNode
}

const AppInterceptors = ({ children }: Props): JSX.Element => {
  const {
    handlers: { handleSignOut },
  } = useAuth()
  const { addToast } = useToast()

  useEffect(() => {
    api.interceptors.response.use(
      (response) => {
        return response
      },
      (err) => {
        if (axios.isAxiosError(err)) {
          const error = err as AxiosError

          addToast({
            type: 'error',
            title: error.response?.data.message,
          })
        }

        if (err.response.status === 401 && err.config) {
          handleSignOut()
          addToast({
            type: 'error',
            title: 'Sua sessão expirou',
            description: 'Faça login novamente para continuar.',
          })
        } else {
          Promise.reject(err)
        }
      },
    )
  }, [addToast, handleSignOut])

  return <>{children}</>
}

export default AppInterceptors
