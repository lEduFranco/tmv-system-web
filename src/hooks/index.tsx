import React from 'react'

import { AuthProvider } from '@/core/contexts/auth-provider'
import { RecordingAudioProvider } from './recordingAudio'

import { ToastProvider } from '@/ui-components'
import { ModalProvider } from 'styled-react-modal'
import { BrowserRouter } from 'react-router-dom'
import AppInterceptors from '@/core/AppInterceptors'

import { AppointmentProvider } from '@/core/modules/appointment/contexts/appointment-provider'

interface Props {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props): JSX.Element => (
  <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <AppInterceptors>
          <RecordingAudioProvider>
            <ModalProvider>
              <AppointmentProvider>{children}</AppointmentProvider>
            </ModalProvider>
          </RecordingAudioProvider>
        </AppInterceptors>
      </AuthProvider>
    </ToastProvider>
  </BrowserRouter>
)

export { AppProvider }
