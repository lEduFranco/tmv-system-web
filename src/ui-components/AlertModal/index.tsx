import React from 'react'
import { Button } from '@/ui-components/Button/index'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

type Title = {
  name: string
  titleIcon?: React.ReactNode
}

type AlertContent = {
  content: string
}

export interface AlertModalProps {
  title: Title
  alertContent?: AlertContent
  onRequestClose: () => void
  isOpen?: boolean
}

const AlertModal: React.FC<AlertModalProps> = ({
  title,
  alertContent,
  onRequestClose,
}) => {
  const { name, titleIcon } = title
  const { content } = alertContent
  return (
    <AlertDialog.Root>
      <div className="flex justify-center">
        <AlertDialog.Trigger asChild>
          <Button typeColor="alert" block={false} size="lg">
            Alert Me
          </Button>
        </AlertDialog.Trigger>
      </div>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-overlay data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-xl focus:outline-none">
          <AlertDialog.Title className="border-b-2 border-border text-center text-xl text-alert align-middle font-semibold justify-center">
            <h3 className="mb-2">
              <span className="inline-flex align-middle mb-1">{titleIcon}</span>
              {name}
            </h3>
          </AlertDialog.Title>
          <AlertDialog.Description className="my-1">
            <div className="px-1 py-2 text-justify">
              <p className="text-text-primary">{content}</p>
            </div>
          </AlertDialog.Description>

          <div className="flex justify-end border-t-2 border-border pt-4">
            <AlertDialog.Cancel asChild className="">
              <Button
                typeColor="primary"
                block={false}
                onClick={onRequestClose}
                size="lg"
              >
                OK
              </Button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export { AlertModal }
