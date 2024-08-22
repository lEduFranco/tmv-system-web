import React from 'react'

import { PageCreate } from '@/ui-components'
import { FiCalendar } from 'react-icons/fi'

export const Dashboard: React.FC = () => {
  return (
    <PageCreate title="Dashboard" icon={<FiCalendar />}>
      <h1>Dashboard</h1>
    </PageCreate>
  )
}
