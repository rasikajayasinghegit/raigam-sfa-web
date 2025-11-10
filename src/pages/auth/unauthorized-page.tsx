import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Access denied</h1>
        <p className="text-muted-foreground">
          You do not have permission to access this module. Contact the system administrator if you
          believe this is a mistake.
        </p>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </div>
  );
};
