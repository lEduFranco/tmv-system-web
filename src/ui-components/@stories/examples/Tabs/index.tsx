import React from 'react'
import { FiUser, FiMapPin, FiInfo } from 'react-icons/fi'
import { Tabs } from '@/ui-components'

export const Example: React.FC = () => {
  const tabs = [
    {
      title: { name: 'User Name', icon: <FiUser size={14} /> },
      content: 'User Name & Surname',
    },
    {
      title: { name: 'User Adress', icon: <FiMapPin size={14} /> },
      content: 'User Adress Information',
    },
    {
      title: { name: 'Other Informations', icon: <FiInfo size={14} /> },
      content: 'Other Informations Content',
    },
    {
      title: { name: 'Disabled Tab' },
      content: 'Disabled Tab Content',
      isDisabled: true,
    },
  ]

  return <Tabs tabs={tabs} />
}
