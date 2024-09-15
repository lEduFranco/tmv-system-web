import { Button, Form, Modal } from '@/ui-components'
import React, { useCallback, useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { Footer } from './footer'
import { FormProvider, useForm } from 'react-hook-form'
import { Appointment, UserType } from '@/core'

import { useGetUsersByRole } from '@/core/modules/user/hooks/use-get-users-by-role'
import { parseISO } from 'date-fns'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface ModalEditProps {
  item: Appointment
  getAppointments: (date: string) => void
}

export type FormData = {
  id: string
  clientId: string
  date: Date
  providerId: string
}

const schema = yup.object().shape({
  clientId: yup.string().required('Cliente é obrigatório'),
  date: yup.date().required('Data é obrigatória'),
  providerId: yup.string().required(),
})

const ModalEdit: React.FC<ModalEditProps> = ({ item, getAppointments }) => {
  const [listUsers, setListUsers] = useState<UserType[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const { users } = useGetUsersByRole('client')
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: item.id,
      clientId: item.clientId,
      date: parseISO(item.date),
      providerId: item.providerId,
    },
  })

  const { clientId } = form.watch()

  const filterUsers = useCallback(
    (value: string) => {
      if (!value.trim()) {
        setListUsers([])
      } else {
        const filter = users.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase()),
        )

        setListUsers(filter)
      }
    },
    [users],
  )

  const handleModalClose = () => {
    setIsOpen(!isOpen)
    form.reset()
  }

  return (
    <FormProvider {...form}>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Trigger>
          <Button typeColor="alert" onClick={() => setIsOpen(true)}>
            <FiEdit2 />
          </Button>
        </Modal.Trigger>
        <Modal.Content
          size="xl"
          title="Editar Agendamento"
          footerContent={
            <Footer
              handleModalClose={handleModalClose}
              getAppointments={getAppointments}
            />
          }
        >
          <div className="flex flex-col gap-3">
            <Form.Input
              type="text"
              name="clientId"
              label="Id do Cliente"
              isRequired
              onChange={(event) => filterUsers(event.target.value)}
            />
            {listUsers.map((user) => (
              <div
                key={user.id}
                className={`px-4 p-2 flex items-center rounded-md justify-start cursor-pointer hover:bg-primary hover:text-white ${clientId === user.id ? 'bg-primary text-white' : 'bg-slate-100'}`}
                onClick={() => {
                  if (clientId !== user.clientId) {
                    form.setValue('clientId', user.clientId)
                  } else {
                    form.setValue('clientId', undefined)
                  }
                }}
              >
                <span>{user.name}</span>
              </div>
            ))}

            {clientId ? (
              <div
                className={`px-4 p-2 flex items-center rounded-md justify-start cursor-pointer bg-primary text-white`}
                onClick={() => form.setValue('clientId', undefined)}
              >
                <span>
                  <strong>Cliente: </strong>
                  {
                    users.find((user) => {
                      return user.clientId === clientId
                    })?.name
                  }
                </span>
              </div>
            ) : null}

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
