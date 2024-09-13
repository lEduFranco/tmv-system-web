import { request } from '@/core/services/request'

import { DeleteAppointmentProps, DeleteAppointmentResponse } from '@appointment'
import { CountAppointmentsResponse } from '../types/count-appointments'

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
