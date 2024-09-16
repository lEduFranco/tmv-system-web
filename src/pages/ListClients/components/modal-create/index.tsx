import { Button, Form, Modal } from '@/ui-components'
import React, { useState } from 'react'
import { Footer } from './footer'
import { FormProvider, useForm } from 'react-hook-form'
import { UserType } from '@/core'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface ModalCreateProps {}

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

const ModalCreate: React.FC<ModalCreateProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<UserType>({
    resolver: yupResolver(schema),
  })

  const handleModalClose = () => {
    setIsOpen(!open)
    form.reset()
  }

  return (
    <FormProvider {...form}>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Trigger>
          <Button onClick={() => {}}>Cadastrar Cliente</Button>
        </Modal.Trigger>
        <Modal.Content
          size="xl"
          title="Cadastrar Cliente"
          footerContent={<Footer handleModalClose={handleModalClose} />}
        >
          <div className="flex flex-col gap-2">
            <Form.Input type="text" name="name" label="Nome" isRequired />
            <Form.Input type="text" name="email" label="E-mail" isRequired />
            <Form.Input type="text" name="password" label="Senha" isRequired />
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

export { ModalCreate }
