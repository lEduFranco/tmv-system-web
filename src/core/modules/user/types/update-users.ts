export interface UpdateUserRequest {
  id: string
  role: 'admin' | 'provider' | 'client' | 'staff'
  email: string
  name: string
  phoneNumber: string
  avatarUrl?: string | null
  street?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
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
