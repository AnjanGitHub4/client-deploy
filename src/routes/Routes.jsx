import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import AppLayout from "../AppLayout";
import ErrorPage from "../pages/error/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", Component: lazy(() => import("../pages/HomePage")) },
      { path: "/about", Component: lazy(() => import("../pages/AboutPage")) },
    ],
  },
  {
    path: "/auth",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/sign-in",
        Component: lazy(() => import("../pages/auth/AuthPage")),
      },
      {
        path: "/auth/sign-up",
        Component: lazy(() => import("../pages/auth/AuthPage")),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/admin",
        Component: lazy(() => import("../pages/dashboard/admin/AdminPage")),
      },
    ],
  },
]);
