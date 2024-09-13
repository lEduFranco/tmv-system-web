import { Appointment } from './appointment'

export type GetAppointmentsByDateRequest = {
  date: string
}

export type GetAppointmentsByDateResponse = Appointment[]
