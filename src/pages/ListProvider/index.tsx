import React, { useMemo } from 'react'
import { Button, ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiUsers, FiRotateCcw } from 'react-icons/fi'
import { Actions } from './components/actions'
import { useGetUsersByRole } from '@/core/modules/user/hooks/get-users-by-role'
import { UserType } from '@/core'

export const ListProviders: React.FC = () => {
  const { users, loading, handleGetUsersByRole } = useGetUsersByRole('provider')

  const columns: ColumnProps<UserType>[] = useMemo(() => {
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
    ]
  }, [])

  return (
    <PageCreate title="Lista de Prestadores" icon={<FiUsers />}>
      <DataGrid
        header={
          <Button
            onClick={() => handleGetUsersByRole('provider')}
            icon={<FiRotateCcw />}
          >
            Recarregar
          </Button>
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
