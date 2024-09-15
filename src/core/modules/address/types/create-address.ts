import { AddressType } from './address'

export type CreateAddressRequest = {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  userId: string
}

export type CreateAddressResponse = AddressType
