import { Form } from '@/ui-components'

import React from 'react'

import { ModalCreate } from '../modal-create'

interface HeaderProps {
  setValue: (name: string, value: any) => void
}

const Header: React.FC<HeaderProps> = ({ setValue }) => {
  return (
    <div className="flex justify-between items-center">
      <Form.DatePicker name="date" className="w-[100px] cursor-pointer z-20" />

      <ModalCreate setValue={setValue} />
    </div>
  )
}

export { Header }
