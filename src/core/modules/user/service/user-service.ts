import { request } from "@/core/services/request";

import { SessionProps, SessionResponse } from "@user/types/sessions";

import { UserType } from "@modules/user/types/user";

import { RegisterUserProps } from "@modules/user/types/register-user";
import { GetUsersRequest, GetUsersResponse } from "../types/get-users-by-role";

import { updateUserProps } from "../types/update-users";

export async function updateUser(params: updateUserProps) {
  return await request<UserType[]>({
    url: `${module}/${params.role}`,
    method: "put",
  });
}

export async function registerUser(params: RegisterUserProps) {
  return await request<UserType[]>({
    url: `${module}`,
    method: "post",
    body: params,
  });
}

export async function sessions({ email, password }: SessionProps) {
  return await request<SessionResponse>({
    url: `${module}/auth`,
    method: "post",
    body: {
      email,
      password,
    },
  });
}

export async function getUsersByRole({ role }: GetUsersRequest) {
  return await request<GetUsersResponse>({
    url: `${module}/find-by-role/${role}`,
    method: "get",
    cacheTime: 0,
  });
}

export async function deleteUser(userId: string) {
  return await request<void>({
    url: `${module}/${userId}`,
    method: "delete",
  });
}
