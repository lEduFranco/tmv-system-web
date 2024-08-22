import { UserType } from '@user'

export interface SessionProps {
  email: string
  password: string
}

interface UserResponse extends Omit<UserType, 'address'> {}

export interface SessionResponse {
  user: UserResponse
  token: string
}
