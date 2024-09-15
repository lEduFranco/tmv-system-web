import { Form } from '@/ui-components'

import React from 'react'

import { ModalCreate } from '../modal-create'

interface HeaderProps {
  getAppointments: (date: string) => void
}

const Header: React.FC<HeaderProps> = ({ getAppointments }) => {
  return (
    <div className="flex justify-between items-center">
      <Form.DatePicker name="date" className="w-[100px] cursor-pointer z-20" />

      <ModalCreate getAppointments={getAppointments} />
    </div>
  )
}

export { Header }
