import React, { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

interface TriggerProps {
  children: ReactNode
}

export const Trigger: React.FC<TriggerProps> = ({ children }) => {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>
}
