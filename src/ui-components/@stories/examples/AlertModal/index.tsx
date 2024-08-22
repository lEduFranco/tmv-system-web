import { AlertModal } from '@/ui-components/AlertModal'
import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

export const Example: React.FC = () => {
  return (
    <AlertModal
      title={{
        name: 'Alert Modal Title',
        titleIcon: <FiAlertTriangle size={18} className="align-middle mr-2" />,
      }}
      alertContent={{
        content:
          'Lorem ipsum dolor sit amet. Non voluptas consequuntur id internos quos id debitis provident id ducimus dignissimos. Aut doloribus quae est quidem laudantium et minus eligendi ex fugit animi. Eos ducimus minima ad modi reiciendis est tenetur eaque. Ut dolores aliquam.',
      }}
      onRequestClose={() => {}}
    />
  )
}
