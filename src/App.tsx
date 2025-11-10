import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { useAppSelector } from "./hooks/use-app-selector";
import { selectIsAuthenticated } from "./features/auth/auth-selectors";
import { createAppRouter } from "./routes/app-router";

function App() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const router = useMemo(() => createAppRouter(isAuthenticated), [isAuthenticated]);

  return <RouterProvider router={router} />;
}

export default App;
