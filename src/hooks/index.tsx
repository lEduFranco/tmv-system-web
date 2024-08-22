import React from 'react'

import { AuthProvider } from '@/core/contexts/auth-provider'

import { ToastProvider } from '@/ui-components'
import { ModalProvider } from 'styled-react-modal'
import { BrowserRouter } from 'react-router-dom'
import AppInterceptors from '@/core/AppInterceptors'

interface Props {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props): JSX.Element => (
  <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <AppInterceptors>
          <ModalProvider>{children}</ModalProvider>
        </AppInterceptors>
      </AuthProvider>
    </ToastProvider>
  </BrowserRouter>
)

export { AppProvider }
