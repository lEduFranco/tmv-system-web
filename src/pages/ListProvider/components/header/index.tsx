import React from 'react'

import { ModalCreate } from '../modal-create'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <ModalCreate />
      </div>
    </div>
  )
}

export { Header }
