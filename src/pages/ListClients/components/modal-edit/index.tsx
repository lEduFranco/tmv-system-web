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

type FormData = {
  name: string
  email: string
  phoneNumber: string
  avatarUrl: string
  password: string
  zipCode: string
  country: string
  state: string
  city: string
  street: string
  addressId: string
}

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phoneNumber: yup.string().required('Número de telefone é obrigatório'),
  avatarUrl: yup.string().required('URL do avatar é obrigatória'),
  password: yup.string().min(6).required('Senha é obrigatória'),
  zipCode: yup.string().required('CEP é obrigatório'),
  country: yup.string().required('País é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  street: yup.string().required('Bairro é obrigatório'),
})

const ModalEdit: React.FC<ModalEditProps> = ({
  item,
  handleGetUsersByRole,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...item,
      addressId: item.addresses[0]?.id,
      zipCode: item.addresses[0]?.zipCode,
      country: item.addresses[0]?.country,
      state: item.addresses[0]?.state,
      city: item.addresses[0]?.city,
      street: item.addresses[0]?.street,
    },
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
            <Form.Input
              type="text"
              name="avatarUrl"
              label="Avatar (URL)"
              isRequired
            />
            <Form.Input type="text" name="zipCode" label="CEP" isRequired />
            <Form.Input type="text" name="country" label="País" isRequired />
            <Form.Input type="text" name="state" label="Estado" isRequired />
            <Form.Input type="text" name="city" label="Cidade" isRequired />
            <Form.Input type="text" name="street" label="Bairro" isRequired />
          </div>
        </Modal.Content>
      </Modal>
    </FormProvider>
  )
}

export { ModalEdit }
