import React from 'react'

import { ModalCreate } from '../modal-create'

interface HeaderProps {
  handleGetUsersByRole: (role: string) => void
}

const Header: React.FC<HeaderProps> = ({ handleGetUsersByRole }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <ModalCreate handleGetUsersByRole={handleGetUsersByRole} />
      </div>
    </div>
  )
}

export { Header }
