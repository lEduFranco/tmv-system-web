import { UserType } from '../../user'

export type Appointment = {
  id: string
  date: string
  providerId: string
  clientId: string
  createdAt: string
  updatedAt: string

  client: UserType
  provider: UserType
}
