import React from 'react'
import { PageCreate } from '@/ui-components'
import { FiGrid, FiUsers, FiCalendar } from 'react-icons/fi'
import { DashboardCard } from './components/DashboardCard'

export const Dashboard: React.FC = () => {
  return (
    <PageCreate title="Dashboard" icon={<FiGrid />}>
      <div className="flex items-center justify-center gap-10">
        <DashboardCard
          title="Agendamentos"
          date="Data"
          total="Total"
          icon={<FiCalendar />}
          items={[
            { title: 'hoje', value: '10' },
            { title: 'Essa semana', value: '150' },
            { title: 'Esse mês', value: '1000' },
            { title: 'Esse ano', value: '10000' },
          ]}
        />
        <DashboardCard
          title="Users"
          date="Data"
          total="Total"
          icon={<FiUsers />}
          items={[
            { title: 'Clientes', value: '10' },
            { title: 'Prestadoras', value: '4' },
            { title: 'Cadastrados no mês', value: '5' },
          ]}
        />
      </div>
    </PageCreate>
  )
}
