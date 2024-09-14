import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { PublicRoute } from '@/core/routes/public-route'
import { PrivateRoute } from '@/core/routes/private-route'

import { AuthLayout } from '@/core/layout/auth-layout'

import { Login, Dashboard, ListProviders, Schedule, ListClients } from '@/pages'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={PublicRoute({ Component: <Login /> })} />

      <Route
        path="/"
        element={PrivateRoute({
          Component: <AuthLayout />,
          allowedRoles: ['admin', 'staff'],
        })}
      >
        <Route
          path="/dashboard"
          element={PrivateRoute({
            Component: <Dashboard />,
            allowedRoles: ['admin', 'staff'],
          })}
        />

        <Route
          path="/schedule"
          element={PrivateRoute({
            Component: <Schedule />,
            allowedRoles: ['admin', 'staff'],
          })}
        />

        <Route
          path="/list-providers"
          element={PrivateRoute({
            Component: <ListProviders />,
            allowedRoles: ['admin', 'staff'],
          })}
        />

        <Route
          path="/list-clients"
          element={PrivateRoute({
            Component: <ListClients />,
            allowedRoles: ['admin', 'staff'],
          })}
        />
      </Route>
    </Routes>
  )
}
