import { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

export const Header = withSuspense(lazy(() => import("./Header")));
export const Footer = withSuspense(lazy(() => import("./Footer")));
export const ListTable = withSuspense(lazy(() => import("./ListTable")));
export const BreadcrumbsComponent = withSuspense(
  lazy(() => import("./BreadcrumbsComponent"))
);
export const LoginForm = withSuspense(lazy(() => import("./LoginForm")));
