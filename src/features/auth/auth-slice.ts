import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthPayload, AuthState } from "../../types/auth";
import { loginThunk, refreshTokenThunk } from "./auth-thunks";

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    setCredentials(
      state,
      action: PayloadAction<{ token: string; refreshToken?: string; user: AuthPayload }>
    ) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken ?? null;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken ?? null;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? action.error.message ?? "Unable to login";
      })
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken ?? state.refreshToken;
      })
      .addCase(refreshTokenThunk.rejected, (state) => {
        state.token = null;
        state.refreshToken = null;
        state.user = null;
        state.isAuthenticated = false;
      });
  }
});

export const { logout, setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
