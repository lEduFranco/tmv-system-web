import { request } from '@/core/services/request'

import { DeleteAppointmentProps, DeleteAppointmentResponse } from '@appointment'
import { CountAppointmentsResponse } from '../types/count-appointments'
import {
  GetAppointmentsByDateRequest,
  GetAppointmentsByDateResponse,
} from '../types/get-appointments-by-date'

const module = '/appointments'

export async function deleteAppointment(params: DeleteAppointmentProps) {
  return await request<DeleteAppointmentResponse>({
    url: `${module}/${params.id}`,
    method: 'delete',
  })
}

export async function countAppointments() {
  return await request<CountAppointmentsResponse>({
    url: `${module}/count`,
    method: 'get',
  })
}

export async function getAppointmentsByDate({
  date,
}: GetAppointmentsByDateRequest) {
  return await request<GetAppointmentsByDateResponse>({
    url: `${module}/find-by-date`,
    method: 'get',
    params: { date },
  })
}
