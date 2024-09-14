import { useState, useEffect, useCallback } from 'react'

import { getAppointmentsByDate } from '../service/appointment-service'
import { useToast } from '@/ui-components'
import { Appointment } from '../types'

const useGetAppointmentsByDate = () => {
  const { addToast } = useToast()

  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)

  const getAppointments = useCallback(
    async (date: string) => {
      try {
        setLoading(true)
        const response = await getAppointmentsByDate({ date })
        setAppointments(response.data)
      } catch (error) {
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

  return { appointments, loading, getAppointments }
}

export { useGetAppointmentsByDate }
