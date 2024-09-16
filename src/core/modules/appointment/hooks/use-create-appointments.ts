import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { createAppointment } from '..'
import { CreateAppointmentsRequest } from '../types/create-appointment'
import { useAppointments } from '../providers/appointments'
import { format, parseISO } from 'date-fns'

const useCreateAppointments = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const {
    handlers: { getAppointments },
  } = useAppointments()

  const handleCreateAppointments = useCallback(
    async (params: CreateAppointmentsRequest) => {
      setLoading(true)
      try {
        const response = await createAppointment(params)

        if (!response.data) {
          return
        }

        getAppointments(format(parseISO(response.data.date), 'yyyy-MM-dd'))

        addToast({
          title: 'Success',
          description: 'Appointment Created',
          type: 'success',
        })
      } catch (error) {
        addToast({ title: 'Error', description: error.message, type: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [addToast, getAppointments],
  )

  return { handleCreateAppointments, loading }
}

export { useCreateAppointments }
