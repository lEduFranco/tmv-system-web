import { Appointment } from '@/core'
import { Button, Form, Modal } from '@/ui-components'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

interface ActionsProps {
  item: Appointment
}

const Actions: React.FC<ActionsProps> = () => {
  const methods = useForm()
  return (
    <div className="flex gap-1">
      <FormProvider {...methods}>
        <Modal>
          <Modal.Trigger>
            <Button typeColor="alert">
              <FiEdit2 />
            </Button>
          </Modal.Trigger>
          <Modal.Content
            title="Editar Cliente"
            footerContent={
              <div className="flex items-center justify-center gap-20  m-4">
                <Button typeColor="blank">Cancelar</Button>
                <Button typeColor="success">Salvar</Button>
              </div>
            }
          >
            <div>
              <Form.Input type="text" name="teste" label="Nome Completo" />
              <Form.Input type="text" name="teste" label="Endereço de E-mail" />
              <Form.Input type="text" name="teste" label="Número de Telefone" />
              <Form.Input type="text" name="teste" label="CEP" />
              <Form.Input type="text" name="teste" label="Estado" />
              <Form.Input type="text" name="teste" label="Cidade" />
              <Form.Input type="text" name="teste" label="Bairro" />
            </div>
          </Modal.Content>
        </Modal>
      </FormProvider>
      <Button typeColor="error">
        <FiTrash2 />
      </Button>
    </div>
  )
}

export { Actions }
