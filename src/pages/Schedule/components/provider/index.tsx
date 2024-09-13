import { Appointment } from '@/core'
import React from 'react'

interface ProviderProps {
  item: Appointment
}

const Provider: React.FC<ProviderProps> = ({ item }) => {
  return <div>{item.provider.name}</div>
}

export { Provider }
