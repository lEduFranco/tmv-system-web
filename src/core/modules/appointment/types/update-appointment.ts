import { Appointment } from './appointment'

export type UpdateAppointmentsRequest = {
  id: string
  date: string
  clientId: string
  providerId: string
}

export type UpdateAppointmentsResponse = Appointment
