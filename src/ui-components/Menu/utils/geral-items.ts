import { FiCalendar, FiGrid } from 'react-icons/fi'

export const geralItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: FiGrid,
    allowedRoles: ['admin', 'staff'],
  },
  {
    label: 'Agenda',
    path: '/schedule',
    icon: FiCalendar,
    allowedRoles: ['admin', 'staff'],
  },
]
