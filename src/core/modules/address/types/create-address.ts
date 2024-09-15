import { AddressType } from "./address";

export type CreateAddressRequest = {
  date: string;
  clientId: string;
  providerId: string;
};

export type CreateAddressResponse = AddressType;
