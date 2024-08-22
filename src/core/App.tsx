import React from 'react'

import GlobalStyle from '@/core/styles/global'
import '@/core/styles/global.css'

import { AppProvider } from '@/hooks'

import { Router } from '@/core/routes'

export const App: React.FC = () => (
  <AppProvider>
    <Router />
    <GlobalStyle />
  </AppProvider>
)
