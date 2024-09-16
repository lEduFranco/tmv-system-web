import { Appointment } from '@/core'
import React from 'react'

interface AddressProps {
  item: Appointment
}

const Address: React.FC<AddressProps> = ({ item }) => {
  if (!item.client?.addresses[0]?.street) {
    return <div>-</div>
  }

  return <div>{!item.client?.addresses[0]?.street}</div>
}

export { Address }
