import React, { useMemo } from 'react'
import { Button, ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiUsers, FiRotateCcw } from 'react-icons/fi'
import { Actions } from './components/actions'
import { useGetUsersByRole } from '@/core/modules/user/hooks/use-get-users-by-role'
import { UserType } from '@/core'
import { Header } from './components/header'

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
    <PageCreate
      title="Lista de Prestadores"
      icon={<FiUsers />}
      actions={
        <Button onClick={() => handleGetUsersByRole('provider')}>
          <FiRotateCcw />
        </Button>
      }
    >
      <DataGrid
        header={<Header handleGetUsersByRole={handleGetUsersByRole} />}
        keyExtractor={(item) => item.id}
        data={users}
        columns={columns}
        loading={loading}
        renderTableActions={({ item }) => (
          <Actions handleGetUsersByRole={handleGetUsersByRole} item={item} />
        )}
      />
    </PageCreate>
  )
}
