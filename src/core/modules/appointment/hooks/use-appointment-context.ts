import { useContext } from 'react'

import { AppointmentContext } from '@appointment'

export const useAppointmentContext = () => {
  return useContext(AppointmentContext)
}
