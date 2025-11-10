import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useAuth } from "../../providers/auth-provider";
import { useAppSelector } from "../../hooks/use-app-selector";
import { selectAuthError } from "../../features/auth/auth-selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required")
});

type FormValues = z.infer<typeof schema>;

export const LoginPage: React.FC = () => {
  const { login, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const authError = useAppSelector(selectAuthError);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard/home-report", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await login(values);
    } catch (error) {
      // Errors are surfaced through the global auth slice; no-op here.
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Authenticate with your Raigam SFA account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" autoComplete="username" {...register("username")} />
              {errors.username ? (
                <p className="text-sm text-destructive">{errors.username.message}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password")}
              />
              {errors.password ? (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              ) : null}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
            {authError ? <p className="text-sm text-destructive">{authError}</p> : null}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
