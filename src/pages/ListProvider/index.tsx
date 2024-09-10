import React, { useMemo } from 'react'
import { ColumnProps, DataGrid, PageCreate } from '@/ui-components'
import { FiUsers } from 'react-icons/fi'
import { dataTest } from './dataTest'

type DataPros = {
  id: string
  name: string
  phoneNumber: string
  email: string
  role: string
}

export const ListProviders: React.FC = () => {
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
        header={<div>coloque o header aqui</div>}
        keyExtractor={(item) => item.id}
        data={dataTest}
        columns={columns}
        renderTableActions={({ item }) => <div>aqui</div>}
      />
    </PageCreate>
  )
}
