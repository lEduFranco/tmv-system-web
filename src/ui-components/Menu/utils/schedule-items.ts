import { FiCalendar } from 'react-icons/fi'

export const scheduleItems = [
  {
    label: 'Agenda',
    path: '/schedule',
    icon: FiCalendar,
    allowedRoles: ['admin', 'staff'],
  },
]
