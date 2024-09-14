import { Appointment } from '@/core'
import { Button, Form, Modal } from '@/ui-components'
import React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { FormProvider, useForm } from 'react-hook-form'

interface ActionsProps {
  item: Appointment
}

export const Actions: React.FC<ActionsProps> = () => {
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
            title="Editar Agendamento"
            footerContent={
              <div className="flex items-center justify-center gap-20  m-4">
                {<Button typeColor="blank">Cancelar</Button>}
                {<Button typeColor="success">Salvar</Button>}
              </div>
            }
          >
            <div>
              <Form.Input
                type="text"
                name="nome"
                label="Alterar nome"
                isRequired
              />
              <Form.Input
                type="text"
                name="teste"
                label="Alterar endereço de e-mail"
                isRequired
              />
              <Form.Input
                type="text"
                name="teste"
                label="Alterar número de telefone"
                isRequired
              />
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
