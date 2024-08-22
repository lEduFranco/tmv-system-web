export interface RegisterUserProps {
  role: 'admin' | 'provider' | 'client' | 'staff'
  email: string
  password: string
  name: string
  avatarUrl: string | null
}
