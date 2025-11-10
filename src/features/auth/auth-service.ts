import type { AuthResponse } from "../../types/auth";
import { apiClient } from "../../services/api-client";

class AuthService {
  async login(credentials: { username: string; password: string }): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/login", credentials);
    return data;
  }

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/refresh", { refreshToken });
    return data;
  }
}

export const authService = new AuthService();
