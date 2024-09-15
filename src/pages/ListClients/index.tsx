import React, { useMemo } from 'react'
import {
  Button,
  ColumnProps,
  DataGrid,
  PageCreate,
  Modal,
  Form,
} from '@/ui-components'
import { FiUsers } from 'react-icons/fi'
import { useGetUsersByRole } from '@/core/modules/user/hooks/use-get-users-by-role'
import { Actions } from './components/actions'
import { FormProvider, useForm } from 'react-hook-form'

type DataPros = {
  id: string
  name: string
  phoneNumber: string
  email: string
  role: string
}

export const ListClients: React.FC = () => {
  const { users, loading, handleGetUsersByRole } = useGetUsersByRole('client')

  const columns: ColumnProps<DataPros>[] = useMemo(() => {
    return [
      {
        label: 'Nome',
        propertyName: 'name',
        renderContents: ({ item }) => <span>{item.name}</span>,
      },
      {
        label: 'Telefone',
        propertyName: 'phoneNumber',
      },
      {
        label: 'E-mail',
        propertyName: 'email',
      },
      {
        label: 'Função',
        propertyName: 'role',
      },
    ]
  }, [])

  const methods = useForm()
  return (
    <PageCreate
      title="Lista de Clientes"
      icon={<FiUsers />}
      fitContent
      actions={
        <Button onClick={() => handleGetUsersByRole('client')}>reload</Button>
      }
    >
      <DataGrid
        header={
          <FormProvider {...methods}>
            <Modal>
              <Modal.Trigger>
                <Button onClick={() => handleGetUsersByRole('client')}>
                  Cadastrar Cliente
                </Button>
              </Modal.Trigger>
              <Modal.Content
                title="Cadastrar Cliente"
                footerContent={
                  <div className="flex items-center justify-center gap-20  m-4">
                    <Button typeColor="blank">Cancelar</Button>
                    <Button typeColor="success">Salvar</Button>
                  </div>
                }
              >
                <div>
                  <Form.Input
                    isRequired
                    type="text"
                    name="teste"
                    label="Nome Completo"
                  />
                  <Form.Input
                    isRequired
                    type="text"
                    name="teste"
                    label="Endereço de E-mail"
                  />
                  <Form.Input
                    isRequired
                    type="text"
                    name="teste"
                    label="Número de Telefone"
                  />
                  <Form.Input
                    isRequired
                    type="text"
                    name="teste"
                    label="Crie uma senha com até 8 dígitos"
                  />
                  <Form.Input isRequired type="text" name="teste" label="CEP" />
                  <Form.Input
                    isRequired
                    type="text"
                    name="teste"
                    label="Estado"
                  />
                  <Form.Input
                    isRequired
                    type="text"
                    name="teste"
                    label="Cidade"
                  />
                  <Form.Input
                    isRequired
                    type="text"
                    name="teste"
                    label="Bairro"
                  />
                </div>
              </Modal.Content>
            </Modal>
          </FormProvider>
        }
        keyExtractor={(item) => item.id}
        data={users}
        columns={columns}
        loading={loading}
        renderTableActions={({ item }) => <Actions item={item} />}
      />
    </PageCreate>
  )
}
