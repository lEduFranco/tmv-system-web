import React from 'react'
import { PageCreate } from '@/ui-components'
import { FiGrid, FiUsers, FiCalendar } from 'react-icons/fi'
import { DashboardCard } from './components/DashboardCard'
import { useCountAppointments } from '@/core/modules/appointment/hooks/use-count-appointments'
import { useGetUsersByRole } from '@/core/modules/user/hooks/use-get-users-by-role'

export const Dashboard: React.FC = () => {
  const { countAppointments } = useCountAppointments()
  const { users: clients } = useGetUsersByRole('client')
  const { users: providers } = useGetUsersByRole('provider')

  return (
    <PageCreate title="Dashboard" icon={<FiGrid />}>
      <div className="flex items-center justify-center gap-10">
        <DashboardCard
          title="Agendamentos"
          date="Data"
          total="Total"
          icon={<FiCalendar />}
          items={[
            { title: 'hoje', value: countAppointments.countAppointmentsToday },
            {
              title: 'Essa semana',
              value: countAppointments.countAppointmentsWeek,
            },
            {
              title: 'Esse mês',
              value: countAppointments.countAppointmentsMonth,
            },
            {
              title: 'Esse ano',
              value: countAppointments.countAppointmentsYear,
            },
          ]}
        />
        <DashboardCard
          title="Users"
          date="Data"
          total="Total"
          icon={<FiUsers />}
          items={[
            { title: 'Clientes', value: clients.length },
            { title: 'Prestadoras', value: providers.length },
          ]}
        />
      </div>
    </PageCreate>
  )
}
