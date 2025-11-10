import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/sidebar";
import { AppHeader } from "../components/layout/app-header";
import { useAuth } from "../providers/auth-provider";

export const DashboardLayout: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar role={user?.role} />
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-muted/40 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
