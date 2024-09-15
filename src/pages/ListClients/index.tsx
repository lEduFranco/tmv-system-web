import React, { useMemo } from 'react'
import { Button, ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiUsers } from 'react-icons/fi'
import { useGetUsersByRole } from '@/core/modules/user/hooks/use-get-users-by-role'
import { Actions } from './components/actions'

import { UserType } from '@/core'
import { Header } from './components/header'

export const ListClients: React.FC = () => {
  const { users, loading, handleGetUsersByRole } = useGetUsersByRole('client')

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
      title="Lista de Clientes"
      icon={<FiUsers />}
      fitContent
      actions={
        <Button onClick={() => handleGetUsersByRole('client')}>reload</Button>
      }
    >
      <DataGrid
        header={<Header handleGetUsersByRole={handleGetUsersByRole} />}
        keyExtractor={(item) => item.id}
        data={users}
        columns={columns}
        loading={loading}
        renderTableActions={({ item }) => (
          <Actions item={item} handleGetUsersByRole={handleGetUsersByRole} />
        )}
      />
    </PageCreate>
  )
}
