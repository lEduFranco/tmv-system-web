import { Button, Form } from '@/ui-components'

import React from 'react'

import { FiPlus } from 'react-icons/fi'

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <Form.DatePicker name="date" />

      <div className="w-1/4">
        <Button size="sm">
          <FiPlus />
          Criar agendamento
        </Button>
      </div>
    </div>
  )
}

export default Header
