import { Appointment } from '@/core'
import { Button, Form, Modal } from '@/ui-components'
import React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

interface ActionsProps {
  item: Appointment
}

const Actions: React.FC<ActionsProps> = ({ item }) => {
  return (
    <div className="flex gap-1">
      <Modal>
        <Modal.Trigger>
          <Button typeColor="alert">
            <FiEdit2 />
          </Button>
        </Modal.Trigger>
        <Modal.Content
          title="Editar Agendamento"
          footerContent={<Button>Fechar</Button>}
        >
          <div>
            <Form.Input type="text" name="teste" label="teste" />
          </div>
        </Modal.Content>
      </Modal>
      <Button typeColor="error">
        <FiTrash2 />
      </Button>
    </div>
  )
}

export { Actions }
