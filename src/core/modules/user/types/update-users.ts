export interface updateUserProps {
  role: "admin" | "provider" | "client" | "staff";
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  avatarUrl: string | null;
}
