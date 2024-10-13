import { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

export const Header = withSuspense(lazy(() => import("./Header")));
export const Footer = withSuspense(lazy(() => import("./Footer")));
export const BreadcrumbsComponent = withSuspense(lazy(() => import("./BreadcrumbsComponent")));
