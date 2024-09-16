import { useState, useCallback } from 'react'

import { useToast } from '@/ui-components'
import { updateAppointment } from '..'
import { UpdateAppointmentsRequest } from '../types/update-appointment'
import { useAppointments } from '../providers/appointments'

const useUpdateAppointments = () => {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const {
    handlers: { getAppointments },
  } = useAppointments()

  const handleUpdateAppointments = useCallback(
    async (params: UpdateAppointmentsRequest) => {
      setLoading(true)
      try {
        await updateAppointment(params)
        getAppointments(params.date)
        addToast({
          title: 'Success',
          description: 'Appointment updated',
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

  return { handleUpdateAppointments, loading }
}

export { useUpdateAppointments }
