import { useUpdateAppointments } from '@/core/modules/appointment/hooks/use-update-appointments'
import { Button } from '@/ui-components'
import { format } from 'date-fns'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormData } from '.'

interface FooterProps {
  handleModalClose: () => void
}

const Footer: React.FC<FooterProps> = ({ handleModalClose }) => {
  const { handleSubmit, watch } = useFormContext()
  const { handleUpdateAppointments, loading } = useUpdateAppointments()

  const { id, providerId } = watch()

  const handleEdit = handleSubmit((data: FormData) => {
    const { date } = data

    const payload = {
      clientId: data.clientId,
      date: format(date, 'yyyy-MM-dd'),
      id,
      providerId,
    }
    handleUpdateAppointments(payload)

    handleModalClose()
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
