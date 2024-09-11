import { UserType } from './user'

export type Role = 'provider' | 'client' | 'admin' | 'staff'

export interface GetUsersRequest {
  role: Role
}

export type GetUsersResponse = UserType[]
