import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

import * as Toast from '@radix-ui/react-toast'
import { ToastContent } from '@ui-components/Toast/toast-content'

interface ToastContentSchema {
  title: string
  description?: string
  duration?: number
  type?: 'default' | 'error' | 'success' | 'alert'
}

type ToastContextProps = {
  addToast: ({ title, description }: ToastContentSchema) => void
}

type ToastProviderProps = {
  children: ReactNode
}

const ToastContext = createContext({} as ToastContextProps)

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [toastContent, setToastContent] = useState({} as ToastContentSchema)

  const addToast = useCallback((props: ToastContentSchema) => {
    setOpen(true)
    setToastContent(props)
  }, [])

  return (
    <ToastContext.Provider value={{ addToast }}>
      <Toast.Provider
        swipeDirection="right"
        duration={toastContent.duration || 5000}
      >
        <ToastContent
          open={open}
          setOpen={setOpen}
          title={toastContent.title}
          description={toastContent.description}
          duration={toastContent.duration}
          type={toastContent.type}
        />
        <Toast.Viewport className="[--viewport-padding:_25px] fixed top-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </Toast.Provider>
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
