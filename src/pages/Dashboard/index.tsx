import React from 'react'
import { PageCreate } from '@/ui-components'
import { FiGrid, FiUsers, FiCalendar, FiBriefcase } from 'react-icons/fi'

export const Dashboard: React.FC = () => {
  return (
    <PageCreate title="Dashboard" icon={<FiGrid />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Clientes"
          icon={<FiUsers />}
          value={150}
          description="Total de clientes ativos"
        />
        <DashboardCard
          title="Agendamentos"
          icon={<FiCalendar />}
          value={75}
          description="Agendamentos para hoje"
        />
        <DashboardCard
          title="Prestadoras"
          icon={<FiBriefcase />}
          value={30}
          description="Prestadoras disponíveis"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RecentClients />
        <UpcomingAppointments />
      </div>
    </PageCreate>
  )
}

interface DashboardCardProps {
  title: string
  icon: React.ReactNode
  value: number
  description: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  value,
  description,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

const RecentClients: React.FC = () => {
  // Aqui você pode adicionar a lógica para buscar os clientes recentes
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Clientes Recentes</h3>
      {/* Adicione uma lista ou tabela de clientes recentes aqui */}
    </div>
  )
}

const UpcomingAppointments: React.FC = () => {
  // Aqui você pode adicionar a lógica para buscar os próximos agendamentos
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Próximos Agendamentos</h3>
      {/* Adicione uma lista ou tabela de próximos agendamentos aqui */}
    </div>
  )
}
