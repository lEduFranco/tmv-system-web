import { FiUsers } from 'react-icons/fi'

export const clientItems = [
  {
    label: 'Lista de Clientes',
    path: '/list-clients',
    icon: FiUsers,
    allowedRoles: ['admin', 'staff'],
  },
]
