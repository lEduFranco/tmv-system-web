import { AddressType } from '@modules/address/types/address'

export type UserType = {
  id: string
  email: string
  role: 'admin' | 'provider' | 'client' | 'staff'
  name: string
  phoneNumber: string
  password: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
  address?: AddressType[]
}
