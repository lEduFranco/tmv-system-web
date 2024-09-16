import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

import { useToast } from '@/ui-components'
import { getAppointmentsByDate } from '../service/appointment-service'
import { Appointment } from '../types'

type AppointmentContextSchema = {
  handlers: {
    getAppointments: (date: string) => Promise<void>
  }
  appointments: Appointment[]
  loading: boolean
}

interface AppointmentProviderProps {
  children: ReactNode
}

export const AppointmentContext = createContext({} as AppointmentContextSchema)

export const AppointmentProvider: React.FC<AppointmentProviderProps> = ({
  children,
}) => {
  const { addToast } = useToast()

  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)

  const getAppointments = useCallback(
    async (date: string) => {
      try {
        setLoading(true)
        const response = await getAppointmentsByDate({ date })
        setAppointments(response.data)
      } catch (error: any) {
        addToast({ title: 'Error', description: error.message, type: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [addToast],
  )

  useEffect(() => {
    const date = new Date().toISOString().split('T')[0]
    getAppointments(date)
  }, [getAppointments])

  return (
    <AppointmentContext.Provider
      value={{
        handlers: { getAppointments },
        appointments,
        loading,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export function useAppointments() {
  const context = useContext(AppointmentContext)

  if (!context) {
    throw new Error(
      'useAppointments must be used within an AppointmentProvider',
    )
  }

  return context
}
