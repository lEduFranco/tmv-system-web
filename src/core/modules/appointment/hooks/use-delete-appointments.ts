import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { deleteAppointment } from '..'
import { DeleteAppointmentRequest } from '../types/delete-appointment'

const useDeleteAppointments = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleDeleteAppointments = useCallback(
    async (params: DeleteAppointmentRequest) => {
      setLoading(true)
      try {
        const response = await deleteAppointment(params)

        if (!response.data) {
          return
        }

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

  return { handleDeleteAppointments, loading }
}

export { useDeleteAppointments }
