import React, { useEffect, useMemo } from 'react'
import { Button, ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiUsers, FiRotateCcw } from 'react-icons/fi'
import { Actions } from './components/actions'
import { UserType } from '@/core'
import { Header } from './components/header'
import { useUsers } from '@/core/modules/user/providers/user'

export const ListProviders: React.FC = () => {
  const {
    users,
    loading,
    handlers: { handleGetUsersByRole },
  } = useUsers()

  useEffect(() => {
    handleGetUsersByRole('provider')
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
      title="Lista de Prestadores"
      icon={<FiUsers />}
      actions={
        <Button onClick={() => handleGetUsersByRole('provider')}>
          <FiRotateCcw />
        </Button>
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
