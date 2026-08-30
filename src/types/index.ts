export interface UserProfile {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
  role: "USER" | "ADMIN";
  createdAt: Date;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: UserProfile;
}

export interface ApiErrorResponse {
  error: string;
  statusCode: number;
}
