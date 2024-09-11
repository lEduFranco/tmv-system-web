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

export const ListProviders: React.FC = () => {
  const { users, loading, handleGetUsersByRole } = useGetUsersByRole('provider')

  const columns: ColumnProps<DataPros>[] = useMemo(() => {
    return [
      {
        label: 'Nome',
        propertyName: 'name',
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
    <PageCreate title="Lista de Prestadores" icon={<FiUsers />}>
      <DataGrid
        header={
          <Button onClick={() => handleGetUsersByRole('provider')}>
            reload
          </Button>
        }
        keyExtractor={(item) => item.id}
        data={users}
        columns={columns}
        renderTableActions={({ item }) => <div>aqui</div>}
        loading={loading}
      />
    </PageCreate>
  )
}
