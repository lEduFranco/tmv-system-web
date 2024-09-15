import { Button, Form, Modal } from '@/ui-components'
import React, { useCallback, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Footer } from './footer'
import { FormProvider, useForm } from 'react-hook-form'
import { UserType } from '@/core'

import { useGetUsersByRole } from '@/core/modules/user/hooks/use-get-users-by-role'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface ModalCreateProps {
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

const ModalCreate: React.FC<ModalCreateProps> = ({ getAppointments }) => {
  const [listUsersClients, setListUsersClients] = useState<UserType[]>([])
  const [listUsersProviders, setListUsersProviders] = useState<UserType[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const { users: clients } = useGetUsersByRole('client')
  const { users: providers } = useGetUsersByRole('provider')

  const form = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const { clientId, providerId } = form.watch()

  const filterClients = useCallback(
    (value: string) => {
      if (!value.trim()) {
        setListUsersClients([])
      } else {
        const filter = clients.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase()),
        )

        setListUsersClients(filter)
      }
    },
    [clients],
  )

  const filterProviders = useCallback(
    (value: string) => {
      if (!value.trim()) {
        setListUsersProviders([])
      } else {
        const filter = providers.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase()),
        )

        setListUsersProviders(filter)
      }
    },
    [providers],
  )

  const handleModalOpen = useCallback(() => {
    setIsOpen(!isOpen)
    form.reset()
    setListUsersProviders([])
    setListUsersClients([])
  }, [form, isOpen])

  const handleModalClose = useCallback(() => {
    setIsOpen(false)
    form.reset()
    setListUsersProviders([])
    setListUsersClients([])
  }, [form])

  return (
    <FormProvider {...form}>
      <Modal open={isOpen} onOpenChange={handleModalOpen}>
        <Modal.Trigger>
          <div className="w-1/4">
            <Button size="sm">
              <FiPlus />
              Criar agendamento
            </Button>
          </div>
        </Modal.Trigger>
        <Modal.Content
          size="xl"
          title="Criar Agendamento"
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
              onChange={(event) => filterClients(event.target.value)}
            />
            {listUsersClients.map((user) => (
              <div
                key={user.id}
                className={`px-4 p-2 flex items-center rounded-md justify-start cursor-pointer hover:bg-primary hover:text-white ${clientId === user.id ? 'bg-primary text-white' : 'bg-slate-100'}`}
                onClick={() => {
                  if (clientId !== user.clientId) {
                    form.setValue('clientId', user.clientId)
                    setListUsersClients([])
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
                    clients.find((user) => {
                      return user.clientId === clientId
                    })?.name
                  }
                </span>
              </div>
            ) : null}

            <Form.Input
              type="text"
              name="providerId"
              label="Id da Prestadora"
              isRequired
              onChange={(event) => filterProviders(event.target.value)}
            />

            {listUsersProviders.map((user) => (
              <div
                key={user.id}
                className={`px-4 p-2 flex items-center rounded-md justify-start cursor-pointer hover:bg-primary hover:text-white ${providerId === user.id ? 'bg-primary text-white' : 'bg-slate-100'}`}
                onClick={() => {
                  if (providerId !== user.providerId) {
                    form.setValue('providerId', user.providerId)
                    setListUsersProviders([])
                  } else {
                    form.setValue('providerId', undefined)
                  }
                }}
              >
                <span>{user.name}</span>
              </div>
            ))}

            {providerId ? (
              <div
                className={`px-4 p-2 flex items-center rounded-md justify-start cursor-pointer bg-primary text-white`}
                onClick={() => form.setValue('providerId', undefined)}
              >
                <span>
                  <strong>Prestadora: </strong>
                  {
                    providers.find((user) => {
                      return user.providerId === providerId
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

export { ModalCreate }
