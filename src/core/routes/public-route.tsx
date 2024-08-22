import React from 'react'

import { Navigate } from 'react-router-dom'
import { useAuth } from '@/core/hooks/use-auth'

type PublicRouteProps = {
  Component: React.ReactNode
}

function render(component: React.ReactNode) {
  return component
}

export const PublicRoute = ({ Component }: PublicRouteProps) => {
  const { tokenIsValid } = useAuth()

  if (tokenIsValid) {
    return <Navigate to="/dashboard" />
  }

  return render(Component)
}
