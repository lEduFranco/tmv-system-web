import { request } from '@/core/services/request'

import { SessionProps, SessionResponse } from '@user/types/sessions'

import { UserType } from '@modules/user/types/user'

import { RegisterUserProps } from '@modules/user/types/register-user'

const module = '/users'

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
  })
}
