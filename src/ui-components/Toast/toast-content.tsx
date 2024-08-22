import React, { useEffect, useState } from 'react'

import * as Toast from '@radix-ui/react-toast'
import * as Progress from '@radix-ui/react-progress'

import { FiX } from 'react-icons/fi'

type ToastContentProps = {
  title: string
  description?: string
  type?: 'default' | 'error' | 'success' | 'alert'
  open?: boolean
  setOpen?: (value: boolean) => void
  duration: number
}

const typeColor = {
  default: {
    background: 'bg-primary',
    base: 'bg-primary-foreground',
  },
  error: {
    background: 'bg-red-800',
    base: 'bg-red-300',
  },
  success: {
    background: 'bg-green-800',
    base: 'bg-green-300',
  },
  alert: {
    background: 'bg-orange-800',
    base: 'bg-orange-300',
  },
}

export const ToastContent: React.FC<ToastContentProps> = ({
  title,
  description,
  open,
  setOpen,
  duration = 5000,
  type = 'default',
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (open) {
      const interval = 50
      const steps = (duration - 500) / interval

      let currentStep = 0

      const progressInterval = setInterval(() => {
        currentStep++
        const newProgress = (currentStep / steps) * 100
        setProgress(newProgress)

        if (currentStep >= steps) {
          clearInterval(progressInterval)
        }
      }, interval)

      return () => {
        clearInterval(progressInterval)
      }
    }

    setProgress(0)
  }, [duration, open])

  return (
    <Toast.Root
      open={open}
      onOpenChange={setOpen}
      className="relative overflow-hidden bg-background rounded-md p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
    >
      <div className="flex justify-between gap-6 items-start">
        <div className="flex flex-col">
          <Toast.Title className="font-bold text-text-primary">
            {title}
          </Toast.Title>
          {description ? (
            <Toast.Description asChild>
              <span>{description}</span>
            </Toast.Description>
          ) : null}
        </div>

        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText="Goto schedule to undo"
        >
          <FiX className="cursor-pointer" />
        </Toast.Action>
      </div>
      <div className="absolute w-full bottom-0 right-0">
        <Progress.Root
          className={`relative overflow-hidden w-full h-[6px] ${typeColor[type].base}`}
          style={{ transform: 'translateZ(0)' }}
          value={progress}
        >
          <Progress.Indicator
            className={`w-full h-full transition-transform ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${typeColor[type].background}`}
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>
    </Toast.Root>
  )
}
