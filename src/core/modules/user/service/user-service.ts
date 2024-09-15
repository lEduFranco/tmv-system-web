import { request } from '@/core/services/request'

import { SessionProps, SessionResponse } from '@user/types/sessions'

import { UserType } from '@modules/user/types/user'

import { RegisterUserProps } from '@modules/user/types/register-user'
import { GetUsersRequest, GetUsersResponse } from '../types/get-users-by-role'

import { UpdateUserRequest, UpdateUserResponse } from '../types/update-users'
import { DeleteUserRequest } from '../types/delete-user'

const module = '/users'

export async function updateUser(params: UpdateUserRequest) {
  return await request<UpdateUserResponse>({
    url: `${module}/${params.id}`,
    method: 'put',
    body: {
      name: params.name,
      email: params.email,
      avatarUrl: params.avatarUrl,
      role: params.role,
      phoneNumber: params.phoneNumber,
    },
  })
}

export async function registerUser(params: RegisterUserProps) {
  return await request<UserType[]>({
    url: `${module}`,
    method: 'post',
    body: params,
  })
}

export async function sessions({ email, password }: SessionProps) {
  return await request<SessionResponse>({
    url: `${module}/auth`,
    method: 'post',
    body: {
      email,
      password,
    },
    cacheTime: 0,
  })
}

export async function getUsersByRole({ role }: GetUsersRequest) {
  return await request<GetUsersResponse>({
    url: `${module}/find-by-role/${role}`,
    method: 'get',
    cacheTime: 0,
  })
}

export async function deleteUser(params: DeleteUserRequest) {
  return await request<void>({
    url: `${module}/${params.id}`,
    method: 'delete',
  })
}
