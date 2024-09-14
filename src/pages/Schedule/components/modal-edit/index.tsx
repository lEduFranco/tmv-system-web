import { Button, Form, Modal } from '@/ui-components'
import React, { useCallback } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { Footer } from './footer'
import { FormProvider, useForm } from 'react-hook-form'
import { Appointment } from '@/core'

import { useGetUsersByRole } from '@/core/modules/user/hooks/get-users-by-role'
import { parseISO } from 'date-fns'

interface ModalEditProps {
  item: Appointment
}

export type FormData = {
  id: string
  clientId: string
  date: Date
  providerId: string
}

const ModalEdit: React.FC<ModalEditProps> = ({ item }) => {
  const { users } = useGetUsersByRole('client')
  const form = useForm<FormData>({
    defaultValues: {
      id: item.id,
      clientId: item.clientId,
      date: parseISO(item.date),
      providerId: item.providerId,
    },
  })

  const filterUsers = useCallback(
    (value: string) => {
      return users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase()),
      )
    },
    [users],
  )

  return (
    <FormProvider {...form}>
      <Modal>
        <Modal.Trigger>
          <Button typeColor="alert">
            <FiEdit2 />
          </Button>
        </Modal.Trigger>
        <Modal.Content
          size="xl"
          title="Editar Agendamento"
          footerContent={<Footer />}
        >
          <div className="flex flex-col gap-3">
            <Form.Input
              type="text"
              name="client"
              label="Cliente"
              isRequired
              onChange={(event) => filterUsers(event.target.value)}
            />
            {users.map((user) => (
              <div
                key={user.id}
                className="px-4 p-2 flex items-center justify-start"
                onClick={() => form.setValue('clientId', user.id)}
              >
                <span>{user.name}</span>
              </div>
            ))}

            <Form.DatePicker
              name="date"
              label="Data"
              isRequired
              className="w-full cursor-pointer z-20"
            />
          </div>
        </Modal.Content>
      </Modal>
    </FormProvider>
  )
}

export { ModalEdit }
