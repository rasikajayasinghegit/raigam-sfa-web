import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { loginThunk, refreshTokenThunk } from "../features/auth/auth-thunks";
import { logout, setCredentials } from "../features/auth/auth-slice";
import type { AuthPayload } from "../types/auth";
import { useAppSelector } from "../hooks/use-app-selector";
import { selectAuthState } from "../features/auth/auth-selectors";

interface AuthContextValue {
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  user: AuthPayload | null;
  loading: boolean;
  token: string | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const AUTH_STORAGE_KEY = "raigam_sfa_auth";

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuthState);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setInitialized(true);
      return;
    }
    const stored = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as {
          token: string;
          refreshToken?: string;
          user: AuthPayload;
        };
        dispatch(
          setCredentials({
            token: parsed.token,
            refreshToken: parsed.refreshToken,
            user: parsed.user
          })
        );
      } catch (error) {
        console.error("Failed to parse auth storage", error);
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
    setInitialized(true);
  }, [dispatch]);

  useEffect(() => {
    if (typeof window === "undefined" || !initialized) {
      return;
    }
    if (authState.isAuthenticated && authState.token && authState.user) {
      window.localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify({
          token: authState.token,
          refreshToken: authState.refreshToken ?? undefined,
          user: authState.user
        })
      );
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [authState.isAuthenticated, authState.token, authState.refreshToken, authState.user, initialized]);

  useEffect(() => {
    if (typeof window === "undefined" || !authState.refreshToken) {
      return;
    }

    const interval = window.setInterval(() => {
      dispatch(refreshTokenThunk());
    }, 15 * 60 * 1000);

    return () => window.clearInterval(interval);
  }, [authState.refreshToken, dispatch]);

  const login = useCallback(
    async (credentials: { username: string; password: string }) => {
      await dispatch(loginThunk(credentials)).unwrap();
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(logout());
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }, [dispatch]);

  const value = useMemo<AuthContextValue>(
    () => ({
      login,
      logout: handleLogout,
      isAuthenticated: authState.isAuthenticated,
      user: authState.user,
      loading: authState.loading,
      token: authState.token
    }),
    [authState.isAuthenticated, authState.loading, authState.token, authState.user, handleLogout, login]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
