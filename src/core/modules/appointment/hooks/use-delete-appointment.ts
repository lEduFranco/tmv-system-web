import { useCallback } from 'react'

import {
  deleteAllAppointments,
  deleteAppointment,
  HandleRemoveAppointmentInMemoryProps,
  useAppointmentContext,
} from '@appointment'

import { useToast } from '@ui-components'

interface HandleDeleteSingleAppointmentProps
  extends HandleRemoveAppointmentInMemoryProps {
  id: string
}

interface HandleDeleteAllAppointmentsProps
  extends HandleRemoveAppointmentInMemoryProps {
  id: string
}

export const useDeleteAppointment = () => {
  const { addToast } = useToast()
  const {
    inMemoryHandlers: { handleRemoveAppointmentInMemory },
  } = useAppointmentContext()

  const handleDeleteSingleAppointment = useCallback(
    async ({
      id,
      dayWeek,
      period,
      providerId,
    }: HandleDeleteSingleAppointmentProps) => {
      try {
        await deleteAppointment({ id })

        handleRemoveAppointmentInMemory({ dayWeek, period, providerId })

        addToast({
          type: 'success',
          title: 'Agendamento excluído com sucesso.',
        })
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao excluir o agendamento',
        })
      }
    },
    [addToast, handleRemoveAppointmentInMemory],
  )

  const handleDeleteAllAppointments = useCallback(
    async ({
      id,
      dayWeek,
      period,
      providerId,
    }: HandleDeleteAllAppointmentsProps) => {
      try {
        await deleteAllAppointments({ id })

        handleRemoveAppointmentInMemory({ dayWeek, period, providerId })

        addToast({
          type: 'success',
          title: 'Agendamentos excluídos com sucesso.',
        })
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao excluir os agendamentos',
        })
      }
    },
    [addToast, handleRemoveAppointmentInMemory],
  )

  return {
    handleDeleteSingleAppointment,
    handleDeleteAllAppointments,
  }
}
