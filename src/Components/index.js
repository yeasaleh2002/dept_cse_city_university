import { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

export const Header = withSuspense(lazy(() => import("./Header")));
export const Footer = withSuspense(lazy(() => import("./Footer")));
export const ListTable = withSuspense(lazy(() => import("./ListTable")));
export const BreadcrumbsComponent = withSuspense(
  lazy(() => import("./BreadcrumbsComponent"))
);
export const LoginForm = withSuspense(lazy(() => import("./LoginForm")));
export const HeroSection = withSuspense(lazy(() => import("./LandingPage/HeroSection")));
export const Slider = withSuspense(lazy(() => import("./Slider")));
export const ResponsiveDrawer = withSuspense(lazy(() => import("./ResponsiveDrawer")));
export const AdminDashboardContent = withSuspense(lazy(() => import("./AdminDashboardContent")));

