import { Appointment } from '@/core'
import React from 'react'

interface ClientProps {
  item: Appointment
}

const Client: React.FC<ClientProps> = ({ item }) => {
  return <div>{item.client.name}</div>
}

export { Client }
