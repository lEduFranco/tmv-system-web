import { FiUser, FiUserPlus, FiUsers } from 'react-icons/fi'

export const clientItems = [
  {
    label: 'Lista de Clientes',
    path: '/list-clients',
    icon: FiUsers,
    allowedRoles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Cadastrar Cliente',
    path: '/create-clients',
    icon: FiUserPlus,
    allowedRoles: ['admin', 'secretary'],
  },
  {
    label: 'Preferências do Cliente',
    path: '/client-preferences',
    icon: FiUser,
    allowedRoles: ['admin', 'secretary', 'rh'],
  },
]
