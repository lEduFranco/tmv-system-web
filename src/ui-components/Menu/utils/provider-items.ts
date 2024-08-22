import { FiUsers } from 'react-icons/fi'

export const providerItems = [
  {
    label: 'Lista de Prestadoras',
    path: '/list-providers',
    icon: FiUsers,
    allowedroles: ['admin', 'staff'],
  },
]
