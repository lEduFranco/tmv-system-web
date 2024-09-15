export interface UpdateUserRequest {
  id: string
  role: 'admin' | 'provider' | 'client' | 'staff'
  email: string
  password: string
  name: string
  phoneNumber: string
  avatarUrl?: string | null
}

export interface UpdateUserResponse {
  id: string
  role: 'admin' | 'provider' | 'client' | 'staff'
  email: string
  password: string
  name: string
  phoneNumber: string
  avatarUrl: string | null
}