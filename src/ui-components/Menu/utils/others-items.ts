import { FiFileText, FiInfo, FiUserPlus } from 'react-icons/fi'

export const othersItems = [
  {
    label: 'Relatórios',
    path: '/reports',
    icon: FiFileText,
    allowedRoles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Chamados',
    path: '/issues',
    icon: FiInfo,
    allowedRoles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Feriados',
    path: '/holidays',
    icon: FiFileText,
    allowedRoles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Registrar',
    path: '/register',
    icon: FiUserPlus,
    allowedRoles: ['admin'],
  },
]
