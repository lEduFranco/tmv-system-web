import React, { useEffect, useMemo } from 'react'
import { Button, ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiUsers } from 'react-icons/fi'
import { Actions } from './components/actions'

import { UserType } from '@/core'
import { Header } from './components/header'
import { useUsers } from '@/core/modules/user/providers/user'

export const ListClients: React.FC = () => {
  const {
    users,
    loading,
    handlers: { handleGetUsersByRole },
  } = useUsers()

  useEffect(() => {
    handleGetUsersByRole('client')
  }, [handleGetUsersByRole])

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
        header={<Header />}
        keyExtractor={(item) => item.id}
        data={users}
        columns={columns}
        loading={loading}
        renderTableActions={({ item }) => <Actions item={item} />}
      />
    </PageCreate>
  )
}
