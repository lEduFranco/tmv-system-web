import React, { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Trigger } from '@ui-components/Modal/components/trigger'
import { Content } from '@ui-components/Modal/components/content'

interface ModalProps {
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface ModalComponent extends React.FC<ModalProps> {
  Trigger: typeof Trigger
  Content: typeof Content
  Dialog: any
}

export const Modal: ModalComponent = ({ children, open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

Modal.Trigger = Trigger
Modal.Content = Content
Modal.Dialog = Dialog
