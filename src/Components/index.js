
import { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

export const Header = withSuspense(lazy(() => import("./Header/Header")));
export const Footer = withSuspense(lazy(() => import("./Footer/Footer")))
