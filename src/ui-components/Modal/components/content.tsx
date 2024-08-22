import React, { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import * as Dialog from '@radix-ui/react-dialog'

import { FiX } from 'react-icons/fi'

const content = tv({
  base: 'max-h-[90%] overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
  variants: {
    size: {
      sm: 'w-3/12 h-4/12',
      md: 'w-5/12 h-8/12',
      lg: 'w-2/3 h-2/3',
      xl: 'w-3/4 h-3/4',
    },
  },
})

type ContentVariants = VariantProps<typeof content>

interface ContentProps extends ContentVariants {
  children: ReactNode
  title?: string
  footerContent?: ReactNode
  closeFunction?: () => void
}

export const Content: React.FC<ContentProps> = ({
  children,
  size = 'md',
  title,
  footerContent,
  closeFunction,
}) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className={content({ size })}>
        <div className="w-full h-full flex flex-col gap-2">
          {title ? (
            <div className="w-full border-b-2 border-disabled pb-2 flex items-center justify-between">
              <Dialog.Title asChild>
                <span className="font-bold text-primary">{title}</span>
              </Dialog.Title>
              <Dialog.Close>
                <FiX
                  onClick={closeFunction}
                  size={20}
                  className="cursor-pointer"
                />
              </Dialog.Close>
            </div>
          ) : null}
          <Dialog.Description asChild>
            <div className="w-full h-full overflow-auto py-2">{children}</div>
          </Dialog.Description>
          {footerContent ? (
            <div className="border-t-2 border-disabled pt-2">
              {footerContent}
            </div>
          ) : null}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
