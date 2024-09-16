import React from 'react'

import { AuthProvider } from '@/core/contexts/auth-provider'

import { ToastProvider } from '@/ui-components'
import { ModalProvider } from 'styled-react-modal'
import { BrowserRouter } from 'react-router-dom'
import AppInterceptors from '@/core/AppInterceptors'
import { UserProvider } from '@/core/modules/user/providers/user'
import { AppointmentProvider } from '@/core/modules/appointment/providers/appointments'

interface Props {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props): JSX.Element => (
  <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <AppInterceptors>
          <UserProvider>
            <AppointmentProvider>
              <ModalProvider>{children}</ModalProvider>
            </AppointmentProvider>
          </UserProvider>
        </AppInterceptors>
      </AuthProvider>
    </ToastProvider>
  </BrowserRouter>
)

export { AppProvider }
