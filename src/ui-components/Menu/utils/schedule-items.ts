import { FiCalendar, FiPlus } from 'react-icons/fi'

export const scheduleItems = [
  {
    label: 'Agenda',
    path: '/schedule',
    icon: FiCalendar,
    allowedRoles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Cadastrar Agendamento',
    path: '/create-appointments',
    icon: FiPlus,
    allowedRoles: ['admin', 'secretary'],
  },
]
