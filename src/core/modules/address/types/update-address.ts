export interface UpdateAddressRequest {
  id: string
  role: 'admin' | 'provider' | 'client' | 'staff'
  email: string
  password: string
  name: string
  phoneNumber: string
  avatarUrl?: string | null
}

export interface UpdateAddressResponse {
  id: string
  role: 'admin' | 'provider' | 'client' | 'staff'
  email: string
  password: string
  name: string
  phoneNumber: string
  avatarUrl: string | null
}
