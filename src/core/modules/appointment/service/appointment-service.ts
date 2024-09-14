import { request } from '@/core/services/request'

import {
  DeleteAppointmentRequest,
  DeleteAppointmentResponse,
} from '@appointment'
import { CountAppointmentsResponse } from '../types/count-appointments'
import {
  GetAppointmentsByDateRequest,
  GetAppointmentsByDateResponse,
} from '../types/get-appointments-by-date'
import {
  UpdateAppointmentsRequest,
  UpdateAppointmentsResponse,
} from '../types/update-appointment'
import {
  CreateAppointmentsRequest,
  CreateAppointmentsResponse,
} from '../types/create-appointment'

const module = '/appointments'

export async function deleteAppointment(params: DeleteAppointmentRequest) {
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
    cacheTime: 0,
  })
}

export async function updateAppointment(data: UpdateAppointmentsRequest) {
  return await request<UpdateAppointmentsResponse>({
    url: `${module}/${data.id}`,
    method: 'put',
    body: {
      date: data.date,
      clientId: data.clientId,
      providerId: data.providerId,
    },
  })
}

export async function createAppointment(data: CreateAppointmentsRequest) {
  return await request<CreateAppointmentsResponse>({
    url: `${module}/`,
    method: 'post',
    body: data,
  })
}
