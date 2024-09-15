import { AddressType } from './address'

export type GetAddressRequest = {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export type GetAddressResponse = AddressType[]
