import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { createAppointment } from '..'
import { CreateAppointmentsRequest } from '../types/create-appointment'

const useCreateAppointments = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleCreateAppointments = useCallback(
    async (params: CreateAppointmentsRequest) => {
      setLoading(true)
      try {
        const response = await createAppointment(params)

        if (!response.data) {
          return
        }

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
    [addToast],
  )

  return { handleCreateAppointments, loading }
}

export { useCreateAppointments }
