import { Button, useToast } from '@/ui-components'
import { format } from 'date-fns'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormData } from '.'
import { useCreateAppointments } from '@/core/modules/appointment/hooks/use-create-appointments'

interface FooterProps {
  handleModalClose: () => void
  getAppointments: (date: string) => void
}

const Footer: React.FC<FooterProps> = ({
  handleModalClose,
  getAppointments,
}) => {
  const { handleSubmit } = useFormContext()
  const { handleCreateAppointments, loading } = useCreateAppointments()
  const { addToast } = useToast()

  const handleEdit = handleSubmit((data: FormData) => {
    try {
      const { date } = data

      const payload = {
        clientId: data.clientId,
        date: format(date, 'yyyy-MM-dd'),
        providerId: data.providerId,
      }
      handleCreateAppointments(payload)

      handleModalClose()
      getAppointments(format(date, 'yyyy-MM-dd'))
    } catch (error) {
      addToast({ title: 'Error', description: error.message, type: 'error' })
    }
  })

  return (
    <div className="flex justify-end">
      <div className="flex gap-1">
        <Button typeColor="blank" size="sm" onClick={() => handleModalClose()}>
          Cancelar
        </Button>

        <Button
          size="sm"
          typeColor="success"
          onClick={handleEdit}
          isLoading={loading}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}

export { Footer }
