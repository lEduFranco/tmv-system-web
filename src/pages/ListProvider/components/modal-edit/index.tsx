import { Button, Form, Modal } from '@/ui-components'
import React, { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { Footer } from './footer'
import { FormProvider, useForm } from 'react-hook-form'
import { UserType } from '@/core'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface ModalEditProps {
  item: UserType
}

const schema = yup.object().shape({
  clientId: yup.string().required('Cliente é obrigatório'),
  date: yup.date().required('Data é obrigatória'),
  providerId: yup.string().required(),
})

const ModalEdit: React.FC<ModalEditProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<UserType>({
    resolver: yupResolver(schema),
    defaultValues: item,
  })

  const handleModalClose = () => {
    setIsOpen(!open)
    form.reset()
  }

  return (
    <FormProvider {...form}>
      <Modal open={isOpen} onOpenChange={handleModalClose}>
        <Modal.Trigger>
          <Button typeColor="alert">
            <FiEdit2 />
          </Button>
        </Modal.Trigger>
        <Modal.Content
          title="Editar Prestadora"
          footerContent={<Footer handleModalClose={handleModalClose} />}
        >
          <div>
            <Form.Input type="text" name="name" label="Nome" isRequired />
            <Form.Input type="text" name="email" label="E-mail" isRequired />
            <Form.Input
              type="text"
              name="phoneNumber"
              label="Número de telefone"
              isRequired
            />
            <Form.Input
              type="text"
              name="avatarUrl"
              label="Avatar (URL)"
              isRequired
            />
          </div>
        </Modal.Content>
      </Modal>
    </FormProvider>
  )
}

export { ModalEdit }
