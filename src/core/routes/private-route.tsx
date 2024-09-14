import React from 'react'

import { Navigate } from 'react-router-dom'
import { useAuth } from '@/core/hooks/use-auth'

type PrivateRouteProps = {
  allowedRoles?: string[]
  Component: React.ReactNode
}

function render(component: React.ReactNode) {
  return component
}

export const PrivateRoute = ({
  allowedRoles,
  Component,
}: PrivateRouteProps) => {
  const { tokenIsValid, user } = useAuth()

  if (!tokenIsValid || (allowedRoles && !allowedRoles.includes(user.role))) {
    return <Navigate to="/" />
  }

  return render(Component)
}
