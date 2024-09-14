import React, { useMemo } from 'react'
import { Button, ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiUsers } from 'react-icons/fi'
import { useGetUsersByRole } from '@/core/modules/user/hooks/get-users-by-role'

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

  return (
    <PageCreate title="Lista de Clientes" icon={<FiUsers />}>
      <DataGrid
        header={
          <Button onClick={() => handleGetUsersByRole('provider')}>
            reload
          </Button>
        }
        keyExtractor={(item) => item.id}
        data={users}
        columns={columns}
        loading={loading}
      />
    </PageCreate>
  )
}
