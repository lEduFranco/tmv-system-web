import { request } from "@/core/services/request";

import {
  UpdateAddressRequest,
  UpdateAddressResponse,
} from "../types/update-address";
import {
  CreateAddressRequest,
  CreateAddressResponse,
} from "../types/create-address";
import {
  DeleteAddressRequest,
  DeleteAddressResponse,
} from "../types/delete-address";

import { GetAddressRequest, GetAddressResponse } from "../types/get-address";

const module = "/address";

export async function deleteAddress(params: DeleteAddressRequest) {
  return await request<DeleteAddressResponse>({
    url: `${module}/${params.id}`,
    method: "delete",
  });
}

export async function updateAddress(data: UpdateAddressRequest) {
  return await request<UpdateAddressResponse>({
    url: `${module}/${data.id}`,
    method: "put",
    body: {},
  });
}

export async function createAddress(data: CreateAddressRequest) {
  return await request<CreateAddressResponse>({
    url: `${module}/`,
    method: "post",
    body: data,
  });
}

export async function getAddress({ date }: GetAddressRequest) {
  return await request<GetAddressResponse>({
    url: `${module}/find-by-date`,
    method: "get",
    params: { data },
    cacheTime: 0,
  });
}
