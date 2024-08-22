import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { PublicRoute } from '@/core/routes/public-route'
import { PrivateRoute } from '@/core/routes//private-route'

import { AuthLayout } from '@/core/layout/auth-layout'

import { Login, Dashboard } from '@/pages'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={PublicRoute({ Component: <Login /> })} />

      <Route
        path="/"
        element={PrivateRoute({
          Component: <AuthLayout />,
          allowedRoles: ['admin', 'secretary', 'rh'],
        })}
      >
        <Route
          path="/dashboard"
          element={PrivateRoute({
            Component: <Dashboard />,
            allowedRoles: ['admin', 'secretary', 'rh'],
          })}
        />
      </Route>
    </Routes>
  )
}
