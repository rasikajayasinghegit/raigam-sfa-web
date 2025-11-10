import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { AuthPayload, AuthResponse } from "../../types/auth";
import { authService } from "./auth-service";

export const loginThunk = createAsyncThunk<
  { token: string; refreshToken?: string; user: AuthPayload },
  { username: string; password: string },
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await authService.login(credentials);
    return {
      token: response.payload.token,
      refreshToken: response.payload.refreshToken,
      user: response.payload
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return rejectWithValue(message);
  }
});

export const refreshTokenThunk = createAsyncThunk<
  { token: string; refreshToken?: string },
  void,
  { state: RootState; rejectValue: string }
>("auth/refresh", async (_, { getState, rejectWithValue }) => {
  const refreshToken = getState().auth.refreshToken;
  if (!refreshToken) {
    return rejectWithValue("Missing refresh token");
  }

  try {
    const response: AuthResponse = await authService.refreshToken(refreshToken);
    return {
      token: response.payload.token,
      refreshToken: response.payload.refreshToken
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return rejectWithValue(message);
  }
});
