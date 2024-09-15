import { Button } from '@/ui-components'

import React from 'react'

interface HeaderProps {
  handleGetUsersByRole: (role: string) => void
}

const Header: React.FC<HeaderProps> = ({ handleGetUsersByRole }) => {
  return (
    <div className="flex justify-between items-center">
      <Button onClick={() => {}}>Cadastrar agendamento</Button>
    </div>
  )
}

export { Header }
