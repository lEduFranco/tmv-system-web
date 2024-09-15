import { Role } from './get-users-by-role'
import { UserType } from './user'

export type CreateUserRequest = {
  email: string
  name: string
  password: string
  role: Role
  phoneNumber: string
  avatarUrl: string
  street?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
}

export type CreateUserResponse = UserType
