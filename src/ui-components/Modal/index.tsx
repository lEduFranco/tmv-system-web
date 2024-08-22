import React, { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Trigger } from '@ui-components/Modal/components/trigger'
import { Content } from '@ui-components/Modal/components/content'

interface ModalProps {
  children: ReactNode
  open?: boolean
}

interface ModalComponent extends React.FC<ModalProps> {
  Trigger: typeof Trigger
  Content: typeof Content
}

export const Modal: ModalComponent = ({ children, open }) => {
  return <Dialog.Root open={open}>{children}</Dialog.Root>
}

Modal.Trigger = Trigger
Modal.Content = Content
