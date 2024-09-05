import React from 'react'
import { PageCreate } from '@/ui-components'
import { FiUsers } from 'react-icons/fi'
import { ListProvidersCard } from './components/ListProviderCard'

export const ListProviders: React.FC = () => {
  return (
    <PageCreate title="Lista de Prestadores" icon={<FiUsers />}>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        <ListProvidersCard name="Creuza" address="Teste" icon={<FiUsers />} />
      </div>
    </PageCreate>
  )
}
