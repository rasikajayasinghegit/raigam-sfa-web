import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-muted">
        <h1 className="text-3xl font-bold">{error.status}</h1>
        <p className="text-muted-foreground">{error.statusText}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-muted">
      <h1 className="text-3xl font-bold">Unexpected error</h1>
      <p className="text-muted-foreground">{(error as Error)?.message ?? "Unknown error"}</p>
    </div>
  );
};
