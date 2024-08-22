import { FiFileText, FiUser, FiUserPlus, FiUsers } from 'react-icons/fi'

export const providerItems = [
  {
    label: 'Lista de Prestadoras',
    path: '/list-providers',
    icon: FiUsers,
    allowedroles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Informações das Prestadoras',
    path: '/list-providers-informations',
    icon: FiUsers,
    allowedroles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Cadastrar Prestadora',
    path: '/create-providers',
    icon: FiUserPlus,
    allowedroles: ['admin', 'rh'],
  },
  {
    label: 'Status da Prestadora',
    path: '/history-status-providers',
    icon: FiUser,
    allowedroles: ['admin', 'secretary', 'rh'],
  },
  {
    label: 'Relatórios das Prestadoras',
    path: '/providers-reports',
    icon: FiFileText,
    allowedroles: ['admin', 'rh'],
  },
  {
    label: 'Geração de PDFs',
    path: '/generate-pdfs',
    icon: FiFileText,
    allowedroles: ['admin', 'rh'],
  },
]
