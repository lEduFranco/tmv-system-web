import { request } from '@/core/services/request'

import { DeleteAppointmentProps, DeleteAppointmentResponse } from '@appointment'

const module = '/appointments'

export async function deleteAppointment(params: DeleteAppointmentProps) {
  return await request<DeleteAppointmentResponse>({
    url: `${module}/${params.id}`,
    method: 'delete',
  })
}
