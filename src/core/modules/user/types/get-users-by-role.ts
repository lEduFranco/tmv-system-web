import { UserType } from './user'

export interface GetUsersRequest {
  role: 'provider' | 'client' | 'admin' | 'staff'
}

export type GetUsersResponse = UserType[]
