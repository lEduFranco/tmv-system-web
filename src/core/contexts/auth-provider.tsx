import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { sessions } from '@user/service/user-service'
import { useToast } from '@ui-components'

import { UserType } from '@user'
import { jwtDecode } from 'jwt-decode'
import { getUnixTime } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { setBearerToken } from '@/core/services/set-bearer'

type HandleSignInProps = {
  email: string
  password: string
}

type AuthContextSchema = {
  handlers: {
    handleSignIn: (params: HandleSignInProps) => void
    handleSignOut: () => void
  }
  user: UserType
  tokenIsValid: boolean
  isSubmitting: boolean
}

interface Properties {
  user: UserType
  tokenIsValid: boolean
  isSubmitting: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextSchema)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const { addToast } = useToast()

  const [properties, setProperties] = useState({} as Properties)

  const handleSetProperties = useCallback((params: Partial<Properties>) => {
    setProperties((oldState) => {
      return {
        ...oldState,
        ...params,
      }
    })
  }, [])

  const handleSignIn = useCallback(
    async ({ email, password }: HandleSignInProps) => {
      handleSetProperties({ isSubmitting: true })

      try {
        const { data } = await sessions({ email, password })

        setBearerToken({ token: data.token })

        localStorage.setItem('@tmv:user', JSON.stringify(data.user))
        localStorage.setItem('@tmv:token', data.token)

        handleSetProperties({
          user: data.user,
          tokenIsValid: true,
        })

        navigate('/dashboard')

        addToast({
          title: 'Bem vindo!',
          description: 'Login Realizado com sucesso!',
          type: 'success',
        })
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Falha ao realizar login',
          description: 'Email ou Senha inválidos.',
        })
      }

      handleSetProperties({ isSubmitting: false })
    },
    [addToast, handleSetProperties, navigate],
  )

  const handleSignOut = useCallback(() => {
    localStorage.removeItem('@tmv:token')
    localStorage.removeItem('@tmv:user')

    handleSetProperties({
      user: null,
      tokenIsValid: false,
    })
  }, [handleSetProperties])

  useEffect(() => {
    const currentToken = localStorage.getItem('@tmv:token')

    if (!currentToken) return

    const decodedToken = jwtDecode(currentToken)

    if (!decodedToken) {
      handleSignOut()
      return
    }

    const tokenIsValid = getUnixTime(new Date()) < decodedToken.exp

    if (tokenIsValid) {
      handleSetProperties({
        tokenIsValid,
        user: JSON.parse(localStorage.getItem('@tmv:user')),
      })

      setBearerToken({ token: currentToken })

      return
    }

    addToast({
      type: 'error',
      title: 'Sua sessão expirou',
      description: 'Faça login novamente para continuar.',
    })

    handleSignOut()
  }, [addToast, handleSetProperties, handleSignOut])

  return (
    <AuthContext.Provider
      value={{
        tokenIsValid: properties.tokenIsValid,
        user: properties.user,
        isSubmitting: properties.isSubmitting,
        handlers: {
          handleSignIn,
          handleSignOut,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
