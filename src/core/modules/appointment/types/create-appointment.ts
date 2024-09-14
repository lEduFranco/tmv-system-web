import { Appointment } from './appointment'

export type CreateAppointmentsRequest = {
  date: string
  clientId: string
  providerId: string
}

export type CreateAppointmentsResponse = Appointment
