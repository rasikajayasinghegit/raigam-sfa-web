import { Navigate, createBrowserRouter } from "react-router-dom";
import type { UserRole } from "../types/auth";
import { DashboardLayout } from "../layouts/dashboard-layout";
import { ProtectedRoute } from "./route-guards";
import { LoginPage } from "../pages/auth/login-page";
import { UnauthorizedPage } from "../pages/auth/unauthorized-page";
import { PlaceholderPage } from "../pages/placeholder-page";
import { ErrorPage } from "../pages/error-page";

interface AppRouteConfig {
  path: string;
  title: string;
  roles?: UserRole[];
  description?: string;
}

const ROUTES: AppRouteConfig[] = [
  {
    path: "/dashboard/home-report",
    title: "Home Report",
    roles: ["System Admin", "Top Management", "Senior Manager Sales", "Senior Manager Company"]
  },
  {
    path: "/dashboard/heart-count",
    title: "Heart Count",
    roles: ["System Admin", "Top Management", "Senior Manager Sales", "Senior Manager Company"]
  },
  {
    path: "/dashboard/demarcation",
    title: "Demarcation",
    roles: ["System Admin", "Senior Manager Sales"]
  },
  {
    path: "/dashboard/distributor-mapping",
    title: "Distributor Mapping",
    roles: ["System Admin", "Senior Manager Sales"]
  },
  {
    path: "/dashboard/final-geography-mapping",
    title: "Final Geography Mapping",
    roles: ["System Admin", "Senior Manager Sales"]
  },
  {
    path: "/sales/view-item-range-wise",
    title: "View Item Range Wise",
    roles: ["System Admin", "Senior Manager Sales", "Manager Sales", "Executive Sales"]
  },
  {
    path: "/sales/stock",
    title: "Stock",
    roles: ["System Admin", "Senior Manager Sales", "Manager Sales", "Executive Sales"]
  },
  {
    path: "/sales/view-invoices",
    title: "View Invoices",
    roles: ["System Admin", "Senior Manager Sales", "Manager Sales", "Executive Sales"]
  },
  {
    path: "/sales/market-return",
    title: "Market Return",
    roles: ["System Admin", "Senior Manager Sales", "Manager Sales", "Executive Sales"]
  },
  {
    path: "/sales/category-add",
    title: "Category Add",
    roles: ["System Admin", "Senior Manager Sales"]
  },
  {
    path: "/sales/item-master",
    title: "Item Master",
    roles: ["System Admin", "Senior Manager Sales"]
  },
  {
    path: "/sales/item-add",
    title: "Item Add",
    roles: ["System Admin", "Senior Manager Sales"]
  },
  {
    path: "/sales/working-day",
    title: "Working Day",
    roles: ["System Admin", "Senior Manager Sales", "Manager Sales"]
  },
  {
    path: "/sales/target",
    title: "Target",
    roles: ["System Admin", "Senior Manager Sales", "Manager Sales"]
  },
  {
    path: "/sales/free-issue",
    title: "Free Issue",
    roles: ["System Admin", "Senior Manager Sales", "Manager Sales"]
  },
  {
    path: "/outlet-module/customer",
    title: "Customer (Outlet)",
    roles: ["System Admin", "Manager Sales", "Executive Sales", "Operation Sales"]
  },
  {
    path: "/outlet-module/route",
    title: "Route",
    roles: ["System Admin", "Manager Sales", "Executive Sales", "Operation Sales"]
  },
  {
    path: "/reports/achievement-category-wise",
    title: "Achievement Category Wise",
    roles: [
      "System Admin",
      "Top Management",
      "Senior Manager Sales",
      "Senior Manager Company",
      "Manager Sales",
      "Executive Sales",
      "Executive Company"
    ]
  },
  {
    path: "/reports/area-wise-sales-report",
    title: "Area Wise Sales Report",
    roles: [
      "System Admin",
      "Top Management",
      "Senior Manager Sales",
      "Senior Manager Company",
      "Manager Sales",
      "Executive Sales",
      "Executive Company"
    ]
  },
  {
    path: "/reports/item-summary-report",
    title: "Item Summary Report",
    roles: [
      "System Admin",
      "Top Management",
      "Senior Manager Sales",
      "Senior Manager Company",
      "Manager Sales",
      "Executive Sales",
      "Executive Company"
    ]
  },
  {
    path: "/reports/territory-wise-sales-report",
    title: "Territory Wise Sales Report",
    roles: [
      "System Admin",
      "Top Management",
      "Senior Manager Sales",
      "Senior Manager Company",
      "Manager Sales",
      "Executive Sales",
      "Executive Company"
    ]
  },
  {
    path: "/reports/territory-wise-items-report",
    title: "Territory Wise Items Report",
    roles: [
      "System Admin",
      "Top Management",
      "Senior Manager Sales",
      "Senior Manager Company",
      "Manager Sales",
      "Executive Sales",
      "Executive Company"
    ]
  },
  {
    path: "/hr-module/gps-monitoring",
    title: "GPS Monitoring",
    roles: ["System Admin", "Senior Manager Company", "Executive Company"]
  },
  {
    path: "/hr-module/time-attendance",
    title: "Time Attendance",
    roles: ["System Admin", "Senior Manager Company", "Executive Company"]
  },
  {
    path: "/admin-module/user-module/add-modifiy-user",
    title: "Add/Modify User",
    roles: ["System Admin", "Top Management"]
  },
  {
    path: "/admin-module/operation/reverse-requests",
    title: "Reverse Requests",
    roles: ["System Admin", "Top Management"]
  },
  {
    path: "/admin-module/operation/manual-bill-quota",
    title: "Manual Bill Quota",
    roles: ["System Admin", "Top Management"]
  },
  {
    path: "/agency-module/dashboard/monthly-target",
    title: "Monthly Target",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/invoice/actual-invoice",
    title: "Actual Invoice",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/invoice/post-invoice",
    title: "Post Invoice",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/invoice/manual-invoice",
    title: "Manual Invoice",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/invoice/view-invoice",
    title: "View Invoice",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/loading-list/view-loading-list",
    title: "View Loading List",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/market-return/return",
    title: "Market Return",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/stock/view-stock",
    title: "View Stock",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/stock/add-stock",
    title: "Add Stock",
    roles: ["System Admin", "Operation Sales"]
  },
  {
    path: "/agency-module/stock/request-order",
    title: "Request Order",
    roles: ["System Admin", "Operation Sales"]
  }
];

const toRelativePath = (path: string) => path.replace(/^\//, "");

export const createAppRouter = (isAuthenticated: boolean) => {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <Navigate
          to={isAuthenticated ? "/dashboard/home-report" : "/auth/login"}
          replace
        />
      )
    },
    {
      path: "/auth/login",
      element: isAuthenticated ? <Navigate to="/dashboard/home-report" replace /> : <LoginPage />
    },
    {
      path: "/unauthorized",
      element: <UnauthorizedPage />
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Navigate to="dashboard/home-report" replace />
            },
            ...ROUTES.map((route) => ({
              path: toRelativePath(route.path),
              element: <ProtectedRoute allowedRoles={route.roles} />,
              children: [
                {
                  index: true,
                  element: <PlaceholderPage title={route.title} description={route.description} />
                }
              ]
            }))
          ]
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ]);
};
