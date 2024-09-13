import { Appointment } from '@/core'
import React from 'react'

interface AddressProps {
  item: Appointment
}

const Address: React.FC<AddressProps> = ({ item }) => {
  if (!item.client?.address) {
    return <div>-</div>
  }

  return <div>{item.client?.address[0]?.street}</div>
}

export { Address }
