import { useState, useEffect, useCallback } from 'react'

import { countAppointments } from '../service/appointment-service'
import { CountAppointmentsResponse } from '../types/count-appointments'
import { useToast } from '@/ui-components'

const useCountAppointments = () => {
  const { addToast } = useToast()

  const [countAppointmentsState, setCountAppointmentsState] =
    useState<CountAppointmentsResponse>({} as CountAppointmentsResponse)

  const getCountAppointments = useCallback(async () => {
    try {
      const response = await countAppointments()
      setCountAppointmentsState(response.data)
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao buscar contagem de agendamentos',
        description: error.message,
      })
    }
  }, [addToast])

  useEffect(() => {
    getCountAppointments()
  }, [getCountAppointments])

  return { countAppointments: countAppointmentsState }
}

export { useCountAppointments }
