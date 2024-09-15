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
  handleGetUsersByRole: (role: string) => void
}

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phoneNumber: yup.string().required('Número de telefone é obrigatório'),
  avatarUrl: yup.string().nullable(),
})

const ModalEdit: React.FC<ModalEditProps> = ({
  item,
  handleGetUsersByRole,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<UserType>({
    resolver: yupResolver(schema),
    defaultValues: item,
  })

  const handleModalClose = () => {
    setIsOpen(!open)
    form.reset()
    handleGetUsersByRole('provider')
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
          title="Editar Prestadora"
          footerContent={<Footer handleModalClose={handleModalClose} />}
        >
          <div className="flex flex-col gap-2">
            <Form.Input type="text" name="name" label="Nome" isRequired />
            <Form.Input type="text" name="email" label="E-mail" isRequired />
            <Form.Input
              type="text"
              name="phoneNumber"
              label="Número de telefone"
              isRequired
            />
            <Form.Input type="text" name="avatarUrl" label="Avatar (URL)" />
          </div>
        </Modal.Content>
      </Modal>
    </FormProvider>
  )
}

export { ModalEdit }
