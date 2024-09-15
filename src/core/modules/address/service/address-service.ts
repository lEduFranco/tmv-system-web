import { request } from '@/core/services/request'

import {
  UpdateAddressRequest,
  UpdateAddressResponse,
} from '../types/update-address'
import {
  CreateAddressRequest,
  CreateAddressResponse,
} from '../types/create-address'
import {
  DeleteAddressRequest,
  DeleteAddressResponse,
} from '../types/delete-address'

const module = '/Address'

export async function deleteAddress(params: DeleteAddressRequest) {
  return await request<DeleteAddressResponse>({
    url: `${module}/${params.id}`,
    method: 'delete',
  })
}

export async function updateAddress(data: UpdateAddressRequest) {
  return await request<UpdateAddressResponse>({
    url: `${module}/${data.id}`,
    method: 'put',
    body: {},
  })
}

export async function createAddress(data: CreateAddressRequest) {
  return await request<CreateAddressResponse>({
    url: `${module}/`,
    method: 'post',
    body: data,
  })
}
